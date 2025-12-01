import Button from '@/app/components/button'
import Progress from '@/app/components/progress'
import Option from '@/app/components/option/index'

import AudioIcon from '@/assets/svg/AudioIcon'
import { createAssessment, updateScores } from '@/services/appwrite'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageDropdown from '../languageDropdown'
import Slider from '../slider'
import ParentMessage from '../parentMessage'
import getQuestions from '@/utils/getQuestions'
import PreloadImage from '../preloadImage'

export default function Assessment() {
  return (
    <Suspense fallback={null}>
      <ChildAssessment />
    </Suspense>
  )
}

const skillQuestionMap = {
  self_awareness: ['question_6', 'question_11', 'question_16'],
  social_management: [
    'question_9',
    'question_14',
    'question_18',
    'question_20',
  ],
  social_awareness: ['question_5', 'question_7', 'question_10', 'question_15'],
  relationship_skills: [
    'question_8',
    'question_13',
    'question_17',
    'question_19',
  ],
  responsible_decision_making: [
    'question_7',
    'question_12',
    'question_19',
    'question_20',
  ],
  metacognition: ['question_9', 'question_14', 'question_18'],
  empathy: [
    'question_5',
    'question_6',
    'question_7',
    'question_8',
    'question_10',
    'question_11',
    'question_13',
    'question_15',
    'question_16',
    'question_17',
    'question_20',
  ],
  critical_thinking: [
    'question_7',
    'question_8',
    'question_12',
    'question_17',
    'question_19',
    'question_20',
  ],
}

function ChildAssessment() {
  const { t, i18n } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, string | string[]>>(
    {},
  )
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [studentInfo, setStudentInfo] = useState<Record<string, string> | null>(
    null,
  )
  const searchParams = useSearchParams()
  const testType = searchParams.get('testType')
  const langParam = searchParams.get('lang')
  const section = searchParams.get('section')
  const zone = searchParams.get('zone')
  const grade = searchParams.get('grade')
  const school = searchParams.get('school')

  useEffect(() => {
    const studentInfo = localStorage.getItem('studentInfo')
    if (studentInfo) {
      setStudentInfo(JSON.parse(studentInfo))
    }
  }, [])

  // Set language from URL parameter if available
  useEffect(() => {
    if (
      langParam &&
      ['en', 'ar'].includes(langParam) &&
      i18n.language !== langParam
    ) {
      i18n.changeLanguage(langParam)
    }
  }, [langParam, i18n])
  const questions = getQuestions(t, i18n.language)

  const calculateScores = () => {
    const totalScore = Object.values(answers).reduce(
      (acc, curr) => acc + curr,
      0,
    )

    const skillScores: Record<string, number> = {}

    Object.entries(skillQuestionMap).forEach(([skill, questions]) => {
      let skillScore = 0
      questions.forEach((question) => {
        skillScore += answers[question] || 0
      })
      skillScores[skill] = skillScore / questions.length
    })

    return {
      overallScore: totalScore / 16,
      skillScores,
    }
  }

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      try {
        const { overallScore, skillScores } = calculateScores()
        const studentInfoData = {
          school: school || '',
          grade: grade || '',
          section: section || '',
          zone: zone || '',
        }

        if (studentInfo) {
          studentInfoData.school = studentInfo.school
          studentInfoData.grade = studentInfo.grade
          studentInfoData.section = studentInfo.section
          studentInfoData.zone = studentInfo.zone
        }

        const data = {
          ...studentInfoData,
          overallScore,
          scores: JSON.stringify(answers),
          skillScores: JSON.stringify(skillScores),
          answers: JSON.stringify(responses),
          testType: testType || 'PRE',
        }

        await createAssessment(data)
        await updateScores({
          ...studentInfoData,
          skillScores,
          assessment: 'child',
          testType: testType || 'PRE',
        })
        setHasSubmitted(true)
        setShowFeedback(true)
      } catch (error) {
        console.error('Error submitting assessment', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (value: string, score: number, questionId: string) => {
    if (questionId == 'question_21') {
      const existing = responses[currentQuestion] || []

      let updated: string[] = []

      if (existing.includes(value)) {
        updated = (existing as string[]).filter((v) => v !== value)
      } else {
        updated = [...(existing as string[]), value]
      }

      setResponses({
        ...responses,
        [currentQuestion]: updated,
      })
    } else {
      setResponses({
        ...responses,
        [currentQuestion]: value,
      })
    }
    if (questionId != 'skip' && questionId != 'question_21') {
      setAnswers({
        ...answers,
        [questionId]: score,
      })
    }
  }

  const handleFeedbackResponse = (response: string) => {
    setShowThankYou(true)
  }

  const isButtonDisabled = (questionType) => {
    if (questionType === 'slider' || questionType == undefined) {
      return !responses[currentQuestion]
    }
    return false
  }

  if (isSubmitting) {
    return (
      <div className="h-64 flex items-center justify-center text-lg">
        {t('assessment.submitting')}
      </div>
    )
  }

  if (showThankYou) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center px-4">
          <div className="text-6xl font-semibold text-gray-700 mb-8 text-center">
            {t('assessment.thankYou')}
          </div>
        </div>
      </div>
    )
  }

  if (showFeedback) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="py-4 bg-primary-500 flex justify-between items-center px-4">
          <div className="text-center text-white font-medium flex-1">
            {t('assessment.title')}
          </div>
          <LanguageDropdown />
        </div>
        <div className="w-full max-w-md mx-auto p-2 md:p-4 flex flex-col items-center justify-center min-h-screen">
          <div className="text-6xl font-semibold text-gray-700 mb-8 text-center">
            {t('assessment.didYouHaveFun')}
          </div>
          <div className="mb-8 flex items-center justify-center">
            <Button onClick={() => handleFeedbackResponse('yes')}>
              {t('common.yes')}
            </Button>
            <Button onClick={() => handleFeedbackResponse('no')}>
              {t('common.no')}
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/finished.png"
              alt="happy child"
              className="w-64 h-auto absolute bottom-0 left-1/2 transform -translate-x-3/4"
            />
          </div>
        </div>
      </div>
    )
  }

  if (hasSubmitted) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center px-4">
          <p className="text-2xl md:text-4xl text-center font-medium mb-8 md:mb-12">
            {t('assessment.yayDone')}
          </p>
          <img
            src="/checkIcon.png"
            alt="done icon"
            className="w-2/3 md:w-1/2"
          />
        </div>

        <div className="relative">
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-auto"
            src="/confetti.png"
            alt="confetti"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <ParentMessage open={[3, 7, 12, 16, 20].includes(currentQuestion)} />
      <div className="py-4 bg-primary-500 flex items-center px-4">
        <div className="flex-1 mr-4">
          <Progress current={currentQuestion} total={questions.length} />
        </div>
        <LanguageDropdown />
      </div>
      <div className="w-full max-w-md mx-auto">
        <div className="p-2 rounded-lg">
          <div className="relative bg-white rounded-xl mb-8">
            {questions[currentQuestion].image && (
              <>
                <PreloadImage
                  src={`/images/${questions[currentQuestion].image}`}
                  width={450}
                  height={400}
                  alt="image"
                  className="w-full h-auto max-w-full transition-opacity duration-300"
                />
              </>
            )}
            <div
              className={`${
                questions[currentQuestion].image
                  ? 'absolute top-[180px] left-2'
                  : ''
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  new Audio(questions[currentQuestion].questionAudio).play()
                }
                aria-label="Play question audio"
              >
                <AudioIcon />
              </button>
            </div>

            <div className="text-lg md:text-2xl font-medium mb-4 text-gray-500 px-2 bg-white p-2 rounded-b-xl">
              {questions[currentQuestion].question}
            </div>
          </div>

          {questions[currentQuestion].type === 'slider' && (
            <Slider
              onChange={handleChange}
              answerOptions={questions[currentQuestion].answerOptions}
            />
          )}

          <div className="grid grid-cols-2 gap-4 place-items-center">
            {questions[currentQuestion].type === 'story' ||
            questions[currentQuestion].type === 'slider'
              ? null
              : questions[currentQuestion].answerOptions.map((opt) => (
                  <Option
                    key={opt.value}
                    image={opt.image}
                    text={opt.label}
                    value={opt.value}
                    audio={opt.audio}
                    isSelected={
                      Array.isArray(responses[currentQuestion])
                        ? responses[currentQuestion].includes(opt.value)
                        : responses[currentQuestion] === opt.value
                    }
                    onChange={handleChange}
                    score={opt.score}
                    questionId={questions[currentQuestion].questionId}
                  />
                ))}
          </div>
        </div>
        <div className="mt-3 text-right px-2 flex justify-center">
          <Button
            onClick={handleNext}
            disabled={isButtonDisabled(questions[currentQuestion].type)}
          >
            {currentQuestion < questions.length - 1
              ? t('common.next')
              : t('common.done')}
          </Button>
        </div>
      </div>
    </div>
  )
}
