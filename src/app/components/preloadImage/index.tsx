import React, { useState, useEffect } from 'react'

export default function PreloadImage({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string
  alt: string
  className: string
  width?: number
  height?: number
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)

    if (!src) return

    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
  }, [src])

  return (
    <div className={`relative overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
      />

      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 overflow-hidden rounded-lg">
          <div className="w-1/2 h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        </div>
      )}
    </div>
  )
}
