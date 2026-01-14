'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

// Play and Pause icon components (inline SVG)
const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
)

const PauseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="4" height="16" fill="currentColor" />
    <rect x="14" y="4" width="4" height="16" fill="currentColor" />
  </svg>
)

// Close icon (X)
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface FloatingVideoIntroProps {
  videoSrc?: string // Video source URL (optional, placeholder if not provided)
}

export default function FloatingVideoIntro({ videoSrc = '/intro_video.mp4' }: FloatingVideoIntroProps) {
  // Constants for video and progress bar sizing
  const videoSize = 148 // Video is 148px diameter
  const videoPadding = 2 // 2px padding around video (this IS the gap)
  const videoContainerSize = videoSize + (videoPadding * 2) // 152px container (148px video + 2px padding each side)
  const progressBarStrokeWidth = 4 // Progress bar stroke width
  // Progress bar radius: video container radius + half of stroke width (2px padding provides the gap)
  const progressBarRadius = (videoContainerSize / 2) + (progressBarStrokeWidth / 2) // 76 + 2 = 78px
  
  const [isVisible, setIsVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Video always shows on page load (no localStorage persistence)
  // Clear any existing dismissal from localStorage
  useEffect(() => {
    localStorage.removeItem('floating-video-dismissed')
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }, [])

  // Handle video metadata loaded
  const handleVideoLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration
      if (videoDuration > 0 && !isNaN(videoDuration)) {
        setDuration(videoDuration)
      }
    }
  }, [])

  // Handle time update - update progress
  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime
      const videoDuration = videoRef.current.duration
      if (videoDuration > 0 && !isNaN(currentTime) && !isNaN(videoDuration) && isFinite(videoDuration)) {
        const newProgress = Math.max(0, Math.min(1, currentTime / videoDuration))
        setProgress(newProgress)
        // Also update duration state if it changed
        if (videoDuration !== duration) {
          setDuration(videoDuration)
        }
      }
    }
  }, [duration])

  // Auto-hide controls after delay when playing
  const scheduleHideControls = useCallback(() => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current)
    }
    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 800)
  }, [])

  // Handle play/pause toggle
  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowControls(true)
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    } else {
      videoRef.current.play()
      setIsPlaying(true)
      scheduleHideControls()
    }
  }, [isPlaying, scheduleHideControls])

  // Handle progress bar click - seek to clicked position
  const handleProgressClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation() // Prevent video click from firing
    
    if (!videoRef.current || !svgRef.current || duration === 0) return

    const svg = svgRef.current
    const svgRect = svg.getBoundingClientRect()
    
    // Get click coordinates relative to SVG
    const x = e.clientX - svgRect.left
    const y = e.clientY - svgRect.top
    
    // Circle center and radius in viewBox coordinates (now 160x160)
    const viewBoxSize = 160
    const centerX = viewBoxSize / 2 // 80
    const centerY = viewBoxSize / 2 // 80
    const circleRadius = progressBarRadius
    
    // Convert click coordinates to viewBox coordinates
    const scaleX = viewBoxSize / svgRect.width
    const scaleY = viewBoxSize / svgRect.height
    const viewBoxX = x * scaleX
    const viewBoxY = y * scaleY
    
    // Calculate distance from center
    const dx = viewBoxX - centerX
    const dy = viewBoxY - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Check if click is within the progress circle area (with tolerance for stroke width)
    // Allow clicks within the stroke area (radius ± strokeWidth/2)
    const strokeWidth = 4
    const minRadius = circleRadius - strokeWidth / 2 - 2
    const maxRadius = circleRadius + strokeWidth / 2 + 2
    
    if (distance < minRadius || distance > maxRadius) {
      return // Clicked outside the progress circle
    }
    
    // Calculate angle from center
    let angle = Math.atan2(dy, dx)
    
    // Convert to 0-360° range, starting from bottom (90°)
    // SVG circle starts at 3 o'clock, we rotate 90 to start at 6 o'clock (bottom)
    // So we need to adjust: angle - 90 to account for the rotation
    angle = (angle * 180 / Math.PI - 90) % 360
    if (angle < 0) angle += 360
    
    // Convert angle to percentage (0-1)
    const percentage = angle / 360
    
    // Calculate target time
    const targetTime = percentage * duration
    
    // Set video time
    if (targetTime >= 0 && targetTime <= duration) {
      videoRef.current.currentTime = targetTime
      setProgress(percentage)
    }
  }, [duration, progressBarRadius])

  // Handle close button
  const handleClose = useCallback(() => {
    setIsVisible(false)
    // Don't persist dismissal - video will show again on next page refresh
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [])

  // Calculate circumference for progress circle
  const circumference = 2 * Math.PI * progressBarRadius
  // strokeDashoffset: when progress is 0, offset is full circumference (nothing visible)
  // when progress is 1, offset is 0 (full circle visible)
  const strokeDashoffset = circumference * (1 - Math.max(0, Math.min(1, progress)))

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-6 right-6 sm:bottom-6 sm:right-6 md:bottom-6 md:right-auto md:left-[calc(50%-560px)] z-50"
    >
      {/* Container is larger to accommodate progress bar outside */}
      <div 
        className="relative w-[160px] h-[160px] flex items-center justify-center"
        onMouseEnter={() => {
          setIsHovered(true)
          setShowControls(true)
          if (hideControlsTimeoutRef.current) {
            clearTimeout(hideControlsTimeoutRef.current)
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          if (isPlaying) {
            scheduleHideControls()
          }
        }}
        onTouchStart={() => {
          if (isPlaying) {
            setShowControls(true)
            scheduleHideControls()
          }
        }}
      >
        {/* Video element - 148px with 2px padding (152px container) */}
        <div className="relative w-[152px] h-[152px] rounded-full z-0 p-[2px]">
          <div className="relative w-[148px] h-[148px] rounded-full overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/intro_video_poster.jpg"
              className="absolute inset-0 w-full h-full rounded-full object-cover cursor-pointer outline-none border-0 ring-0 focus:outline-none focus:ring-0"
              onLoadedMetadata={handleVideoLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onClick={(e) => {
                // Only handle click if not clicking on progress bar area
                const target = e.target as HTMLElement
                if (target.tagName !== 'circle' && target.tagName !== 'svg') {
                  handlePlayPause()
                }
              }}
              onPlay={() => {
                setIsPlaying(true)
                scheduleHideControls()
              }}
              onPause={() => {
                setIsPlaying(false)
                setShowControls(true)
                if (hideControlsTimeoutRef.current) {
                  clearTimeout(hideControlsTimeoutRef.current)
                }
              }}
              onEnded={() => {
                setIsPlaying(false)
                setProgress(0)
                if (videoRef.current) {
                  videoRef.current.currentTime = 0
                }
              }}
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* Circular progress bar SVG - positioned outside video */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full z-10"
          viewBox="0 0 160 160"
          onClick={handleProgressClick}
          style={{ pointerEvents: 'none' }}
        >
          {/* Background circle (full circle) - gray-4 track */}
          <circle
            cx="80"
            cy="80"
            r={progressBarRadius}
            fill="none"
            stroke="var(--gray-4)"
            strokeWidth="4"
            strokeLinecap="round"
            className="pointer-events-none"
          />
          {/* Progress circle (animated) - gray-8, starts from bottom, goes clockwise */}
          <circle
            cx="80"
            cy="80"
            r={progressBarRadius}
            fill="none"
            stroke="var(--gray-8)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(90 80 80)`}
            className="cursor-pointer transition-all duration-100"
            style={{ pointerEvents: 'all', opacity: progress > 0 ? 1 : 0 }}
          />
        </svg>

        {/* Play/Pause button overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[148px] h-[148px] rounded-full">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePlayPause()
              }}
              className={`absolute inset-0 flex items-center justify-center rounded-full transition-opacity duration-150 z-10 outline-none border-0 ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${
                !isPlaying 
                  ? 'bg-black/20 backdrop-blur-sm hover:bg-black/30' 
                  : 'bg-black/30'
              }`}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              style={{
                opacity: !isPlaying ? 1 : showControls ? 1 : 0,
                pointerEvents: !isPlaying || showControls ? 'auto' : 'none',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              <div className="text-white">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Close button - positioned to overlap the middle of progress bar at 45 degrees */}
        <button
          onClick={handleClose}
          className="absolute top-[13px] right-[13px] w-6 h-6 bg-button-secondary rounded-[24px] flex items-center justify-center shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.12)] hover:bg-button-secondary-hover transition-colors duration-150 pointer-events-auto text-icon-primary z-20"
          aria-label="Close video"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
