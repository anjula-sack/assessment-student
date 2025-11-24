import i18n from '@/i18n'
import React from 'react'
interface ProgressProps {
  current: number
  total: number
}

export default function Progress({ current, total }: ProgressProps) {
  const percentage = (current / total) * 100
  const isltr = i18n.language === 'ar'

  return (
    <div className="flex justify-center">
      <div className="relative w-full h-4 m-2 p-1 bg-white rounded-full">
        <div
          className="h-full bg-[#fde046] transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />

        <img
          src={'/images/progress_indicator.png'}
          alt="cat"
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10"
          style={{
            left: isltr ? 'auto' : `${percentage}%`,
            right: isltr ? `${percentage}%` : 'auto',
          }}
        />
      </div>
    </div>
  )
}
