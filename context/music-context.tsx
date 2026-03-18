"use client"

import React, { createContext, useContext, useState, useRef, useEffect } from "react"

export interface Song {
  id: number
  title: string
  file: string
  albumArt: string
  artist: string
}

export const songs: Song[] = [
  { id: 1, title: "Bulldog Flex Anthem", file: "song1.mp3", albumArt: "/music/album-art/song1.png", artist: "Empire State Bulldogs" },
  { id: 2, title: "Bulldog Love", file: "song2.mp3", albumArt: "/music/album-art/song2.png", artist: "Empire State Bulldogs" },
  { id: 3, title: "Empire State Bulldogs", file: "song3.mp3", albumArt: "/music/album-art/song3.png", artist: "Empire State Bulldogs" },
  { id: 4, title: "Empire State Reign", file: "song4.mp3", albumArt: "/music/album-art/song4.png", artist: "Empire State Bulldogs" },
  { id: 5, title: "King Simba's Reign", file: "song5.mp3", albumArt: "/music/album-art/song5.png", artist: "Empire State Bulldogs" },
  { id: 6, title: "Puppy Dreams", file: "song6.mp3", albumArt: "/music/album-art/song6.png", artist: "Empire State Bulldogs" },
  { id: 7, title: "Simba's Legacy", file: "song7.mp3", albumArt: "/music/album-art/song7.png", artist: "Empire State Bulldogs" },
]

interface MusicContextType {
  isPlaying: boolean
  currentTrackIndex: number
  volume: number
  currentTime: number
  duration: number
  isExpanded: boolean
  repeatMode: "none" | "one" | "all"
  shuffleMode: boolean
  togglePlay: () => void
  nextTrack: () => void
  prevTrack: () => void
  seekTo: (time: number) => void
  setVolume: (volume: number) => void
  setIsExpanded: (expanded: boolean) => void
  setRepeatMode: (mode: "none" | "one" | "all") => void
  setShuffleMode: (shuffle: boolean) => void
  playTrack: (index: number) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [repeatMode, setRepeatMode] = useState<"none" | "one" | "all">("none")
  const [shuffleMode, setShuffleMode] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0
        audio.play().catch(console.error)
      } else if (repeatMode === "all" || currentTrackIndex < songs.length - 1) {
        nextTrack()
      } else {
        setIsPlaying(false)
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [currentTrackIndex, repeatMode, shuffleMode])

  useEffect(() => {
    if (audioRef.current) {
      const src = `/music/${songs[currentTrackIndex].file}`
      if (audioRef.current.src !== window.location.origin + src) {
        audioRef.current.src = src
        audioRef.current.load()
      }
      
      if (!isFirstLoad && isPlaying) {
        audioRef.current.play().catch(console.error)
      }
    }
    setIsFirstLoad(false)
  }, [currentTrackIndex])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
    }
  }

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const nextTrack = () => {
    let nextIndex
    if (shuffleMode) {
      nextIndex = Math.floor(Math.random() * songs.length)
      if (nextIndex === currentTrackIndex && songs.length > 1) {
        nextIndex = (nextIndex + 1) % songs.length
      }
    } else {
      nextIndex = (currentTrackIndex + 1) % songs.length
    }
    setCurrentTrackIndex(nextIndex)
    setIsPlaying(true)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(true)
  }

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTrackIndex,
        volume,
        currentTime,
        duration,
        isExpanded,
        repeatMode,
        shuffleMode,
        togglePlay,
        nextTrack,
        prevTrack,
        seekTo,
        setVolume,
        setIsExpanded,
        setRepeatMode,
        setShuffleMode,
        playTrack,
      }}
    >
      <audio ref={audioRef} crossOrigin="anonymous" suppressHydrationWarning />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider")
  }
  return context
}
