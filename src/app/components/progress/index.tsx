import React from 'react'
interface ProgressProps {
  current: number
  total: number
}

export default function Progress({ current, total }: ProgressProps) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full h-3 m-2 bg-yellow-200 rounded-full">
        {/* Filled portion */}
        <div
          className="absolute h-3 bg-yellow-500 rounded-full z-10"
          style={{
            width: `${((current + 1) / total) * 100}%`,
          }}
        />

        {/* Dots */}
        {Array.from({ length: total }).map((_, index) => {
          const left = (index / (total - 1)) * 100
          const isActive = index === current

          return (
            <div
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
                isActive
                  ? 'w-4 h-4 border-4 border-red-400 bg-yellow-200'
                  : 'w-2 h-2 bg-red-300'
              } rounded-full`}
              style={{
                left: `${left}%`,
                marginLeft: isActive ? '-8px' : '-4px',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
