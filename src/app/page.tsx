'use client'
import Link from 'next/link'
import React, { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Button from './components/button'
import LanguageDropdown from './components/languageDropdown'
import Dropdown from './components/dropdown'
import { getSchools, getGrades } from '@/utils/schools'

// English audio files
import instruction1 from '@/assets/audios/en/instructions/instruction_1.mp3'
import instruction2 from '@/assets/audios/en/instructions/instruction_2.mp3'
import instruction3 from '@/assets/audios/en/instructions/instruction_3.mp3'
import instruction4 from '@/assets/audios/en/instructions/instruction_4.mp3'
import instruction5 from '@/assets/audios/en/instructions/instruction_5.mp3'
import instruction6 from '@/assets/audios/en/instructions/instruction_6.mp3'

// Arabic audio files
import instruction1Ar from '@/assets/audios/ar/instructions/instruction_1.m4a'
import instruction2Ar from '@/assets/audios/ar/instructions/instruction_2.m4a'
import instruction3Ar from '@/assets/audios/ar/instructions/instruction_3.m4a'
import instruction4Ar from '@/assets/audios/ar/instructions/instruction_4.m4a'
import instruction5Ar from '@/assets/audios/ar/instructions/instruction_5.m4a'
import instruction6Ar from '@/assets/audios/ar/instructions/instruction_6.m4a'

import AudioIcon from '@/assets/svg/AudioIcon'

enum Step {
  PLAY,
  INSTRUCTIONS,
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageContent />
    </Suspense>
  )
}

const getInstructionAudios = (language: string) => {
  const isArabic = language === 'ar'

  return [
    isArabic ? instruction1Ar : instruction1,
    isArabic ? instruction2Ar : instruction2,
    isArabic ? instruction3Ar : instruction3,
    isArabic ? instruction4Ar : instruction4,
    isArabic ? instruction5Ar : instruction5,
    isArabic ? instruction6Ar : instruction6,
  ]
}

function PageContent() {
  const { t, i18n } = useTranslation()
  const [step, setStep] = useState(Step.INSTRUCTIONS)
  const [formData, setFormData] = useState({
    school: { label: '', value: '' },
    grade: { label: '', value: '' },
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const testType = searchParams.get('testType')

  const instructionAudios = getInstructionAudios(i18n.language)
  const schools = getSchools(t)
  const grades = getGrades(t)

  // Set default values when component mounts
  useEffect(() => {
    if (schools.length > 0 && !formData.school.value) {
      setFormData((prev) => ({ ...prev, school: schools[0] }))
    }
    if (grades.length > 0 && !formData.grade.value) {
      setFormData((prev) => ({ ...prev, grade: grades[0] }))
    }
  }, [schools, grades, formData.school.value, formData.grade.value])

  const handleSchoolSelect = (school: { label: string; value: string }) => {
    setFormData((prev) => ({ ...prev, school }))
  }

  const handleGradeSelect = (grade: { label: string; value: string }) => {
    setFormData((prev) => ({ ...prev, grade }))
  }

  const handleStartAssessment = () => {
    const params = new URLSearchParams()
    if (testType) params.set('testType', testType)
    if (formData.school.value) params.set('school', formData.school.value)
    if (formData.grade.value) params.set('grade', formData.grade.value)

    // Preserve language parameter
    const langParam = searchParams.get('lang')
    if (langParam) params.set('lang', langParam)

    router.push(`/assessment?${params.toString()}`)
  }

  function Instructions() {
    return (
      <>
        {/* Tilli image - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-2 bottom-0 w-32 xl:w-auto">
          <img src="/tilli.png" alt="" width={180} />
        </div>

        {/* Mobile-friendly Tilli image */}
        <div className="md:hidden absolute right-2 bottom-2 w-16">
          <img src="/tilli.png" alt="" width={80} />
        </div>

        <div className="justify-center items-center flex flex-col h-[90vh] px-4">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-10">
            {t('instructions.readInstructions')}
          </h2>

          {/* School and Grade Selection */}
          <div className="bg-white p-4 md:p-6 rounded-xl w-full max-w-md mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              {t('login.studentDetails')}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('common.selectSchool')}
                </label>
                <Dropdown
                  options={schools}
                  onSelect={handleSchoolSelect}
                  currentOption={formData.school}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('common.selectGrade')}
                </label>
                <Dropdown
                  options={grades}
                  onSelect={handleGradeSelect}
                  currentOption={formData.grade}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl relative w-full max-w-md">
            <div
              className={`absolute top-4 ${
                i18n.language === 'ar' ? 'left-4' : 'right-4'
              } text-gray-500 cursor-pointer hover:text-black`}
            >
              <button
                onClick={() => {
                  let currentIndex = 0

                  const playNextAudio = () => {
                    if (currentIndex < instructionAudios.length) {
                      const audio = new Audio(instructionAudios[currentIndex])
                      audio.onended = () => {
                        currentIndex++
                        playNextAudio()
                      }
                      audio.play()
                    }
                  }

                  playNextAudio()
                }}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <AudioIcon width={32} height={32} />
              </button>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 leading-snug">
              {t('instructions.instructionsTitle')}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
              <li>{t('instructions.instruction1')}</li>
              <li>{t('instructions.instruction2')}</li>
              <li>{t('instructions.instruction3')}</li>
              <li>
                {t('instructions.instruction4')}
                <span className="inline-block align-middle ml-1">
                  <AudioIcon width={20} height={20} />
                </span>
              </li>
              <li>
                {t('instructions.instruction5')}
                <span className="ml-2 px-2 py-1 rounded-full bg-primary-700 text-white text-sm font-medium">
                  {t('common.next')}
                </span>
              </li>
            </ul>
          </div>

          <Button
            onClick={handleStartAssessment}
            disabled={!formData.school.value || !formData.grade.value}
          >
            {t('instructions.start')}
          </Button>
        </div>
      </>
    )
  }

  function Play() {
    return (
      <>
        {/* Tilli image - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-2 bottom-0 w-32 xl:w-auto">
          <img src="/tilli.png" alt="" width={180} />
        </div>

        {/* Mobile-friendly Tilli image */}
        <div className="md:hidden absolute right-2 bottom-2 w-16">
          <img src="/tilli.png" alt="" width={80} />
        </div>

        <div className="justify-center items-center flex flex-col h-[90vh] px-4">
          <p className="md:my-12 text-4xl md:text-6xl my-6 text-center font-medium">
            {t('instructions.kidsTurn')}
          </p>
          <Button onClick={() => setStep(Step.INSTRUCTIONS)}>
            {t('instructions.play')}
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="bg-primary-400 w-full px-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <img
              src="/logo.png"
              width={40}
              height={300}
              alt="logo"
              className="self-center"
            />
            <p className="text-md md:text-xl text-white font-semibold p-3">
              {t('instructions.title')}
            </p>
          </div>
          <LanguageDropdown />
        </div>
      </div>
      {step === Step.PLAY && <Play />}
      {step === Step.INSTRUCTIONS && <Instructions />}
    </>
  )
}
