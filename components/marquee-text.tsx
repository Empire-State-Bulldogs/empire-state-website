"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
    children: string;
    /** Scroll only while this is true, e.g. while a track is playing. */
    active?: boolean;
    /** Pixels travelled per second. Lower reads calmer. */
    speed?: number;
    /** Seconds to hold still at each end before moving. */
    pause?: number;
    className?: string;
};

// A title that scrolls only when it actually overflows.
//
// The player bars sit in narrow fixed-width slots, so titles like "King
// Simba's Reign" were being cut off by `truncate` with no way to read the
// rest. This measures the text against its container and animates only when
// there is something hidden: a short title stays perfectly still, which
// matters because constant motion in a header is exhausting to sit next to.
//
// The travel is the overflow distance rather than the full width, so the text
// slides just far enough to reveal its tail and comes back. Duration is
// derived from that distance so long and short titles move at the same
// speed instead of the same duration.
export function MarqueeText({
    children,
    active = true,
    speed = 30,
    pause = 1.6,
    className,
}: Props) {
    const viewport = useRef<HTMLSpanElement>(null);
    const content = useRef<HTMLSpanElement>(null);
    const [overflow, setOverflow] = useState(0);

    useEffect(() => {
        const vp = viewport.current;
        const el = content.current;
        if (!vp || !el) return;

        const measure = () => {
            // Sub-pixel differences are not real overflow; require a couple of
            // pixels before deciding the text is clipped.
            const diff = el.scrollWidth - vp.clientWidth;
            setOverflow(diff > 2 ? diff : 0);
        };

        measure();

        // Re-measure when the slot resizes (breakpoint change, sidebar open)
        // and when the font finishes loading, which changes text width.
        const ro = new ResizeObserver(measure);
        ro.observe(vp);
        ro.observe(el);
        document.fonts?.ready.then(measure).catch(() => {});

        return () => ro.disconnect();
    }, [children]);

    const scrolling = overflow > 0 && active;
    // The keyframes spend 32% of the cycle travelling (18->50 out, 68->100
    // back) and the rest holding at each end. Deriving the duration from the
    // distance keeps every title moving at `speed` px/s whatever its length.
    const duration = Math.max(overflow / speed / 0.32 + pause, 4);

    return (
        <span
            ref={viewport}
            className={cn("block overflow-hidden whitespace-nowrap", className)}
            // The full text stays available to assistive tech and on hover
            // even while the visible part is mid-scroll.
            title={children}
        >
            <span
                ref={content}
                className={cn("inline-block will-change-transform", scrolling && "animate-marquee-slide")}
                style={
                    scrolling
                        ? ({
                              "--marquee-distance": `-${overflow}px`,
                              "--marquee-duration": `${duration.toFixed(1)}s`,
                          } as React.CSSProperties)
                        : undefined
                }
            >
                {children}
            </span>
        </span>
    );
}
