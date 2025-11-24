'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ParentMessage({ open }: { open: boolean }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)

    if (open) {
      const timer = setTimeout(() => setIsOpen(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!isOpen) return null

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="bg-white shadow-lg rounded-2xl px-6 py-4 w-[90vw] max-w-lg border">
        <h2 className="text-primary-700 font-bold text-xl">
          {t('parentMessage.dearParents')}
        </h2>
        <p className="text-gray-700 mt-1">{t('parentMessage.subtitle')}</p>
      </div>
    </div>
  )
}
