"use client"

import { useMusic, songs } from "@/context/music-context"
import {
  Play, Pause, SkipForward, SkipBack,
  Repeat, Shuffle, Volume2, VolumeX,
  ChevronDown, Instagram, Phone, X, Music2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bankroll_bop93/",
    icon: Instagram,
    gradient: "from-purple-600 via-pink-500 to-orange-400",
    username: "@bankroll_bop93",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@bankrollbop",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z" />
      </svg>
    ),
    gradient: "from-black via-gray-900 to-gray-700",
    username: "@bankrollbop",
  },
  {
    label: "Call Us",
    href: "tel:5189173429",
    icon: Phone,
    gradient: "from-primary/80 to-accent/80",
    username: "518-917-3429",
  },
]

interface MobilePlayerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobilePlayer({ isOpen, onClose }: MobilePlayerProps) {
  const {
    isPlaying, currentTrackIndex, currentTime, duration,
    volume, repeatMode, shuffleMode,
    togglePlay, nextTrack, prevTrack, seekTo,
    setVolume, setRepeatMode, setShuffleMode, playTrack,
  } = useMusic()

  const currentTrack = songs[currentTrackIndex]

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return "0:00"
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  const cycleRepeat = () => {
    setRepeatMode(repeatMode === "none" ? "all" : repeatMode === "all" ? "one" : "none")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background overflow-hidden lg:hidden animate-in slide-in-from-bottom duration-400">
      {/* Background Album Art Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentTrack.albumArt}
          alt=""
          className="w-full h-full object-cover scale-110 blur-3xl opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 pt-6 pb-3">
          <div className="flex items-center gap-2">
            <Music2 size={18} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">ESB Radio</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-90"
            aria-label="Close player"
          >
            <ChevronDown size={22} className="text-foreground" />
          </button>
        </div>

        {/* Album Art */}
        <div className="flex justify-center px-8 pt-4 pb-2">
          <div className="relative group">
            <div className={cn(
              "absolute -inset-4 rounded-3xl blur-2xl opacity-60 bg-primary/40 transition-all duration-700",
              isPlaying && "opacity-80 animate-pulse"
            )} />
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10">
              <img
                src={currentTrack.albumArt}
                alt={currentTrack.title}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700",
                  isPlaying && "scale-105"
                )}
              />
              {/* Playing indicator overlay */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/10 flex items-end justify-end p-3">
                  <div className="flex gap-0.5 items-end h-5 bg-black/30 rounded-md px-1.5 py-1">
                    <div className="w-1 bg-primary rounded-full animate-music-bar-1"></div>
                    <div className="w-1 bg-primary rounded-full animate-music-bar-2"></div>
                    <div className="w-1 bg-primary rounded-full animate-music-bar-3"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Track Info */}
        <div className="text-center px-6 pt-4">
          <h2 className="text-2xl font-black text-foreground truncate leading-tight">
            {currentTrack.title}
          </h2>
          <p className="text-sm text-primary font-semibold mt-1 uppercase tracking-widest">
            {currentTrack.artist}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Track {currentTrackIndex + 1} of {songs.length}
          </p>
        </div>

        {/* Seeker */}
        <div className="px-6 pt-5 pb-2">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={(v: number[]) => seekTo(v[0])}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono mt-1.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-5 px-6 pb-3">
          <button
            onClick={() => setShuffleMode(!shuffleMode)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90",
              shuffleMode ? "text-primary bg-primary/15" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Shuffle size={20} />
          </button>

          <button
            onClick={prevTrack}
            className="w-14 h-14 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-all active:scale-90 bg-white/5"
            aria-label="Previous"
          >
            <SkipBack size={28} />
          </button>

          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/50 transition-all active:scale-90 hover:shadow-primary/70"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={38} className="fill-white" /> : <Play size={38} className="fill-white ml-1" />}
          </button>

          <button
            onClick={nextTrack}
            className="w-14 h-14 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-all active:scale-90 bg-white/5"
            aria-label="Next"
          >
            <SkipForward size={28} />
          </button>

          <button
            onClick={cycleRepeat}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90 relative",
              repeatMode !== "none" ? "text-primary bg-primary/15" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Repeat size={20} />
            {repeatMode === "one" && (
              <span className="absolute top-1 right-1 text-[8px] font-black text-primary leading-none">1</span>
            )}
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 px-8 pb-3">
          <button onClick={() => setVolume(volume === 0 ? 0.7 : 0)} className="shrink-0">
            {volume === 0 ? <VolumeX size={18} className="text-muted-foreground" /> : <Volume2 size={18} className="text-primary" />}
          </button>
          <Slider
            value={[volume * 100]}
            max={100}
            step={1}
            onValueChange={(v: number[]) => setVolume(v[0] / 100)}
            className="flex-1"
          />
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-white/10 my-2" />

        {/* Socials */}
        <div className="px-5 pb-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">Follow & Connect</p>
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all active:scale-95"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br", s.gradient, "shadow-lg")}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-foreground/80 text-center leading-tight">{s.username}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Playlist */}
        <div className="px-5 pb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">Playlist</p>
          <div className="space-y-1.5">
            {songs.map((song, i) => (
              <button
                key={song.id}
                onClick={() => playTrack(i)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-xl transition-all active:scale-98 text-left",
                  i === currentTrackIndex
                    ? "bg-primary/15 border border-primary/30"
                    : "bg-white/5 hover:bg-white/10 border border-transparent"
                )}
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <img src={song.albumArt} alt={song.title} className="w-full h-full object-cover" />
                  {i === currentTrackIndex && isPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="flex gap-0.5 items-end h-3.5">
                        <div className="w-0.5 bg-primary animate-music-bar-1"></div>
                        <div className="w-0.5 bg-primary animate-music-bar-2"></div>
                        <div className="w-0.5 bg-primary animate-music-bar-3"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("text-sm font-bold truncate", i === currentTrackIndex ? "text-primary" : "text-foreground")}>
                    {song.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                </div>
                {i === currentTrackIndex && (
                  <div className="shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
