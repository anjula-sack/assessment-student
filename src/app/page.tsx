'use client'
import enData from '@/i18n/locales/en.json'
import arData from '@/i18n/locales/ar.json'
import React, { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Button from './components/button'
import LanguageDropdown from './components/languageDropdown'

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
  VIDEO,
  REMINDER,
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
  const [step, setStep] = useState(Step.VIDEO)
  const [formData, setFormData] = useState({
    school: '',
    grade: '',
    zone: '',
    section: '',
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const testType = searchParams.get('testType')

  const instructionAudios = getInstructionAudios(i18n.language)

  const data: any = i18n.language === 'ar' ? arData : enData

  const schools = formData.zone ? data.zonesToSchools[formData.zone] : []
  const gradeOptions = ['grade1']
  const sectionOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

  const handleStartAssessment = () => {
    const params = new URLSearchParams()
    if (testType) params.set('testType', testType)
    if (formData.school) params.set('school', formData.school)
    if (formData.grade) params.set('grade', formData.grade)
    if (formData.section) params.set('section', formData.section)
    if (formData.zone) params.set('zone', formData.zone)

    // Preserve language parameter
    const langParam = searchParams.get('lang')
    if (langParam) params.set('lang', langParam)

    router.push(`/assessment?${params.toString()}`)
  }

  const handleVideoComplete = () => {
    setStep(Step.REMINDER)
  }

  const handlePrivacyContinue = () => {
    setStep(Step.INSTRUCTIONS)
  }

  function VideoIntro() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-6">
          {t('preAssessment.videoTitle')}
        </h2>
        <div className="relative w-full max-w-3xl">
          <video
            src="/videos/ar/child.mp4"
            controls
            playsInline
            autoPlay
            className="w-full rounded-2xl shadow-lg"
            onEnded={handleVideoComplete}
          />
          <button
            type="button"
            onClick={handleVideoComplete}
            className="absolute top-3 right-3 bg-white/90 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-white"
          >
            {t('preAssessment.skip')}
          </button>
        </div>
      </div>
    )
  }

  function Reminder() {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-8">
          <div className="rounded-2xl p-6 md:p-8 w-full max-w-2xl ">
            {/* Greeting */}
            <h1 className="text-2xl md:text-3xl font-bold text-primary-700 text-center mb-6">
              {t('consent.greeting')}
            </h1>

            {/* Main Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {/* Description */}
              <p
                className="text-base md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: t('consent.description').replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong>$1</strong>',
                  ),
                }}
              />

              {/* Assessment Types */}
              <div className="ml-4 space-y-2">
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('consent.parentQuestionnaire').replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>',
                      ),
                    }}
                  />
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('consent.childQuestionnaire').replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>',
                      ),
                    }}
                  />
                </p>
              </div>

              {/* Data Usage */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  {t('consent.dataUsageTitle')}
                </p>
                <div className="ml-4 space-y-2">
                  <p className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{t('consent.dataUsage1')}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{t('consent.dataUsage2')}</span>
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  {t('consent.confidentialityTitle')}
                </p>
                <div className="ml-4 space-y-2">
                  <p className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t('consent.confidentiality1').replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong>$1</strong>',
                        ),
                      }}
                    />
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{t('consent.confidentiality2')}</span>
                  </p>
                </div>
              </div>

              {/* Consent Instruction */}
              <p className="text-base md:text-lg pt-4 border-t border-gray-200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('consent.consentInstruction').replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong>$1</strong>',
                    ),
                  }}
                />
              </p>
            </div>

            <div
              className="mt-12 text-black"
              dangerouslySetInnerHTML={{ __html: t('consent.privacyPolicy') }}
            />

            {/* Button */}
            <div className="text-center mt-8">
              <Button onClick={handlePrivacyContinue}>
                {t('preAssessment.understandCta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
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

        <div className="justify-center items-center flex flex-col mt-5 px-4">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-5">
            {t('instructions.readInstructions')}
          </h2>

          {/* School and Grade Selection */}
          <div className="bg-white p-4 md:p-6 rounded-xl w-full max-w-md mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              {t('login.studentDetails')}
            </h3>
            <div className="space-y-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('login.zone')} *
                </label>

                <select
                  value={formData.zone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      zone: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#82A4DE] 
                     text-sm sm:text-base text-gray-900 bg-white"
                  required
                >
                  <option value="">
                    {i18n.language === 'ar' ? 'اختر المنطقة' : 'Select Zone'}
                  </option>

                  {Object.entries(data.zones).map(([zoneId, zoneName]) => (
                    <option key={zoneId} value={zoneId}>
                      {zoneName as string}
                    </option>
                  ))}
                </select>
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('login.school')} *
              </label>

              <select
                value={formData.school}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    school: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#82A4DE] 
                     text-sm sm:text-base text-gray-900 bg-white"
                required
                disabled={!formData.zone}
              >
                <option value="">{t('login.selectSchool')}</option>

                {schools.map((schoolId: string) => (
                  <option key={schoolId} value={schoolId}>
                    {data.schools[schoolId]} {/* translated label */}
                  </option>
                ))}
              </select>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('login.section')} *
                </label>
                <select
                  value={formData.section}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      section: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#82A4DE] text-sm sm:text-base text-gray-900 bg-white"
                  required
                >
                  <option value="">{t('login.selectSection')}</option>
                  {sectionOptions.map((section) => (
                    <option key={section} value={section}>
                      {t(`sections.${section}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('login.grade')} *
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      grade: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#82A4DE] text-sm sm:text-base text-gray-900 bg-white"
                  required
                >
                  <option value="">{t('login.selectGrade')}</option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade}>
                      {t(`grades.${grade}`)}
                    </option>
                  ))}
                </select>
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
            disabled={
              !formData.school ||
              !formData.grade ||
              !formData.section ||
              !formData.zone
            }
          >
            {t('instructions.start')}
          </Button>
        </div>
      </>
    )
  }

  const renderStep = () => {
    switch (step) {
      case Step.VIDEO:
        return <VideoIntro />
      case Step.REMINDER:
        return <Reminder />
      case Step.INSTRUCTIONS:
      default:
        return <Instructions />
    }
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
      {renderStep()}
    </>
  )
}
