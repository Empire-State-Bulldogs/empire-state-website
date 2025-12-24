import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1 border-b-0",
        destructive:
          "bg-destructive text-white shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1 border-b-0",
        outline:
          "bg-primary text-white shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 border-b-0 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1 border-b-0",
        ghost:
          "bg-accent text-accent-foreground shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1",
        link: "bg-primary text-white shadow-[0_8px_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-1",
      },
      size: {
        default: "h-12 px-4 py-2 has-[>svg]:px-3 text-xl sm:text-lg md:text-lg lg:text-lg",
        sm: "h-10 rounded-md gap-1 px-3 has-[>svg]:px-2 text-lg sm:text-base md:text-base",
        lg: "h-14 rounded-lg px-5 has-[>svg]:px-4 text-2xl sm:text-xl md:text-xl",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
