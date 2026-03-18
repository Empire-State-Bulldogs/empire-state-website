"use client"

import { useMusic, songs } from "@/context/music-context"
import { Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Volume2, VolumeX, ListMusic, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export function ExpandedPlayer() {
  const {
    isPlaying,
    currentTrackIndex,
    currentTime,
    duration,
    volume,
    isExpanded,
    repeatMode,
    shuffleMode,
    setIsExpanded,
    togglePlay,
    nextTrack,
    prevTrack,
    seekTo,
    setVolume,
    setRepeatMode,
    setShuffleMode,
    playTrack
  } = useMusic()

  const currentTrack = songs[currentTrackIndex]

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  if (!isExpanded) return null

  return (
    <div 
      className={cn(
        "fixed left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-primary/20 transition-all duration-500 ease-in-out",
        "h-[calc(100vh-4rem)] md:h-[450px] overflow-hidden shadow-2xl",
        "top-16 md:top-20 animate-in slide-in-from-top duration-500"
      )}
    >
      <div className="container mx-auto h-full p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsExpanded(false)}
          className="md:hidden absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Close player"
        >
          <ChevronUp size={24} />
        </button>

        {/* Left Side: Playlist */}
        <div className="hidden lg:flex flex-col w-1/4 h-full border-r border-primary/10 pr-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <ListMusic className="text-primary" size={20} />
            <h3 className="font-bold text-lg text-foreground uppercase tracking-wider">Up Next</h3>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2 pr-2">
            {songs.map((song, index) => (
              <button
                key={song.id}
                onClick={() => playTrack(index)}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-300 group",
                  index === currentTrackIndex 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="relative w-10 h-10 shrink-0 rounded overflow-hidden">
                  <img src={song.albumArt} alt={song.title} className="w-full h-full object-cover" />
                  {index === currentTrackIndex && isPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="flex gap-1 items-end h-4">
                        <div className="w-1 bg-primary animate-music-bar-1"></div>
                        <div className="w-1 bg-primary animate-music-bar-2"></div>
                        <div className="w-1 bg-primary animate-music-bar-3"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-left overflow-hidden">
                  <p className={cn("text-xs font-bold truncate", index === currentTrackIndex ? "text-primary" : "text-foreground")}>
                    {song.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">{song.artist}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center: Album Art & Info */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pl-0 lg:pl-4">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 ring-1 ring-primary/30 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img 
                src={currentTrack.albumArt} 
                alt={currentTrack.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x mb-2">
              {currentTrack.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-medium">{currentTrack.artist}</p>
            
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setShuffleMode(!shuffleMode)}
                className={cn("p-2 rounded-full transition-all", shuffleMode ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary")}
              >
                <Shuffle size={20} />
              </button>
              <button 
                onClick={() => setRepeatMode(repeatMode === "none" ? "all" : repeatMode === "all" ? "one" : "none")}
                className={cn("p-2 rounded-full transition-all relative", repeatMode !== "none" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary")}
              >
                <Repeat size={20} />
                {repeatMode === "one" && <span className="absolute top-1 right-1 text-[8px] font-bold">1</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Controls */}
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-8">
          {/* Seeker */}
          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={(vals: number[]) => seekTo(vals[0])}
              className="py-4"
            />
          </div>

          {/* Player Buttons */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTrack}
              className="p-3 text-primary hover:text-primary/70 transition-all transform hover:scale-110 active:scale-95"
              aria-label="Previous track"
            >
              <SkipBack size={32} />
            </button>

            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-xl shadow-primary/40 transition-all transform hover:scale-110 active:scale-95 hover:shadow-primary/60"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={40} className="fill-white" />
              ) : (
                <Play size={40} className="fill-white ml-2" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="p-3 text-primary hover:text-primary/70 transition-all transform hover:scale-110 active:scale-95"
              aria-label="Next track"
            >
              <SkipForward size={32} />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-4 px-4">
            <button onClick={() => setVolume(volume === 0 ? 0.7 : 0)}>
              {volume === 0 ? (
                <VolumeX size={20} className="text-muted-foreground" />
              ) : (
                <Volume2 size={20} className="text-primary" />
              )}
            </button>
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              onValueChange={(vals: number[]) => setVolume(vals[0] / 100)}
              className="flex-1"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Close Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent cursor-pointer hover:h-2 transition-all"
        onClick={() => setIsExpanded(false)}
      ></div>
    </div>
  )
}
