import Button from '@/app/components/button'
import Progress from '@/app/components/progress'
import Option from '@/app/components/option/index'

import AudioIcon from '@/assets/svg/AudioIcon'
import { createAssessment, updateScores } from '@/services/appwrite'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getAudio } from '@/utils/audioLoader'

import LanguageDropdown from '../languageDropdown'

const getQuestions = (t: any, language: string) => {
  const audioFiles = getAudio(language)

  return [
    {
      question: t('assessment.questions.q1'),
      questionAudio: audioFiles.question_1,
      answerOptions: [
        {
          label: t('assessment.answers.always'),
          value: '1',
          image: 'Q1_Always.png',
          audio: audioFiles.question_1_option_1,
        },
        {
          label: t('assessment.answers.never'),
          value: '2',
          image: 'Q1_Never.png',
          audio: audioFiles.question_1_option_2,
        },
        {
          label: t('assessment.answers.sometimes'),
          value: '3',
          image: 'Q1_Sometimes.png',
          audio: audioFiles.question_1_option_3,
        },
      ],
      image: '1.png',
    },
    {
      question: t('assessment.questions.q1'),
      questionAudio: audioFiles.question_2,
      answerOptions: [
        {
          label: t('assessment.answers.always'),
          value: '1',
          image: 'Q2_Always.png',
          audio: audioFiles.question_2_option_1,
        },
        {
          label: t('assessment.answers.never'),
          value: '2',
          image: 'Q2_Never.png',
          audio: audioFiles.question_2_option_2,
        },
        {
          label: t('assessment.answers.sometimes'),
          value: '3',
          image: 'Q2_Sometimes.png',
          audio: audioFiles.question_2_option_3,
        },
      ],
      image: '2.png',
    },
    {
      question: t('assessment.questions.q1'),
      questionAudio: audioFiles.question_3,
      answerOptions: [
        {
          label: t('assessment.answers.always'),
          value: '1',
          image: 'Q3_Always.png',
          audio: audioFiles.question_3_option_1,
        },
        {
          label: t('assessment.answers.never'),
          value: '2',
          image: 'Q3_Never.png',
          audio: audioFiles.question_3_option_2,
        },
        {
          label: t('assessment.answers.sometimes'),
          value: '3',
          image: 'Q3_Sometimes.png',
          audio: audioFiles.question_3_option_3,
        },
      ],
      image: '3.png',
    },
    {
      question: t('assessment.questions.q4'),
      type: 'slider',
      questionAudio: audioFiles.question_4,
      answerOptions: [
        {
          label: t('assessment.answers.always'),
          value: '1',
          audio: audioFiles.question_4_option_1,
        },
        {
          label: t('assessment.answers.never'),
          value: '2',
          audio: audioFiles.question_4_option_2,
        },
        {
          label: t('assessment.answers.sometimes'),
          value: '3',
          audio: audioFiles.question_4_option_3,
        },
      ],
      image: '4.png',
    },
    {
      question: t('assessment.questions.q5'),
      questionAudio: audioFiles.question_5,
      answerOptions: [
        {
          label: t('assessment.answers.happy'),
          value: '1',
          image: 'Happy.png',
          audio: audioFiles.question_5_option_1,
        },
        {
          label: t('assessment.answers.angry'),
          value: '2',
          image: 'Angry.png',
          audio: audioFiles.question_5_option_2,
        },
        {
          label: t('assessment.answers.sad'),
          value: '3',
          image: 'Sad.png',
          audio: audioFiles.question_5_option_3,
        },
        {
          label: t('assessment.answers.dontKnow'),
          value: '4',
          image: 'dont_know.png',
          audio: audioFiles.question_5_option_4,
        },
      ],
      image: '5.png',
    },
    {
      type: 'story',
      question: t('assessment.stories.s1'),
      questionAudio: audioFiles.story_1,
      image: '6,7,8,9.png',
    },
    {
      question: t('assessment.questions.q6'),
      questionAudio: audioFiles.question_6,
      answerOptions: [
        {
          label: t('assessment.answers.happy'),
          value: '1',
          image: 'Happy.png',
          audio: audioFiles.question_6_option_1,
        },
        {
          label: t('assessment.answers.angry'),
          value: '2',
          image: 'Angry.png',
          audio: audioFiles.question_6_option_2,
        },
        {
          label: t('assessment.answers.sad'),
          value: '3',
          image: 'Sad.png',
          audio: audioFiles.question_6_option_3,
        },
        {
          label: t('assessment.answers.dontKnow'),
          value: '4',
          image: 'dont_know.png',
          audio: audioFiles.question_6_option_4,
        },
      ],
      image: '6,7,8,9.png',
    },
    {
      question: t('assessment.questions.q7'),
      questionAudio: audioFiles.question_7,
      answerOptions: [
        {
          label: t('assessment.answers.runningFast'),
          value: '1',
          image: 'Q7_running_fast.png',
          audio: audioFiles.question_7_option_1,
        },
        {
          label: t('assessment.answers.wantedToHit'),
          value: '2',
          image: 'Q7_wanted_to_hit.png',
          audio: audioFiles.question_7_option_2,
        },
        {
          label: t('assessment.answers.didNotSee'),
          value: '3',
          image: 'Q7_did_not_see.png',
          audio: audioFiles.question_7_option_3,
        },
        {
          label: t('assessment.answers.dontKnow'),
          value: '4',
          image: 'dont_know.png',
          audio: audioFiles.question_7_option_4,
        },
      ],
      image: '6,7,8,9.png',
    },
    {
      question: t('assessment.questions.q8'),
      questionAudio: audioFiles.question_8,
      answerOptions: [
        {
          label: t('assessment.answers.laugh'),
          value: '1',
          image: 'Q8_Laugh.png',
          audio: audioFiles.question_8_option_1,
        },
        {
          label: t('assessment.answers.comfort'),
          value: '2',
          image: 'Q8_Comfort.png',
          audio: audioFiles.question_8_option_2,
        },
        {
          label: t('assessment.answers.walkAway'),
          value: '3',
          image: 'Q8_walk_away.png',
          audio: audioFiles.question_8_option_3,
        },
        {
          label: t('assessment.answers.dontKnow'),
          value: '4',
          image: 'dont_know.png',
          audio: audioFiles.question_8_option_4,
        },
      ],
      image: '6,7,8,9.png',
    },
    {
      question: t('assessment.questions.q9'),
      questionAudio: audioFiles.question_9,
      answerOptions: [
        {
          label: t('assessment.answers.breathe'),
          value: '1',
          image: 'Q9_breathe.png',
          audio: audioFiles.question_9_option_1,
        },
        {
          label: t('assessment.answers.hit'),
          value: '2',
          image: 'Q9_hit.png',
          audio: audioFiles.question_9_option_2,
        },
        {
          label: t('assessment.answers.askAdult'),
          value: '3',
          image: 'Q9_ask_adult.png',
          audio: audioFiles.question_9_option_3,
        },
        {
          label: t('assessment.answers.dontKnow'),
          value: '4',
          image: 'dont_know.png',
          audio: audioFiles.question_9_option_4,
        },
      ],
      image: '6,7,8,9.png',
    },
  ]
}

export default function Assessment() {
  return (
    <Suspense fallback={null}>
      <ChildAssessment />
    </Suspense>
  )
}

const scoringMatrix = {
  '0': (answer: string) => (answer === '3' ? 3 : 1), // Q1: answer 2 gets 3 marks rest 1 mark
  '1': (answer: string) => (['1', '2', '3'].includes(answer) ? 3 : 1), // Q2: answers 1,2,3 gets 3 marks rest 1 mark
  '2': (answer: string) => (answer === '1' ? 3 : answer === '3' ? 2 : 0), // Q3: answer 1 gets 3 marks, answer 3 gets 2 marks rest gets 0
  '3': (answer: string) => (answer === '1' ? 3 : 0), // Q4: answer 1 gets 3 marks rest 0 mark
  '4': (answer: string) => (['1', '2'].includes(answer) ? 3 : 0), // Q5: answers 1,2 gets 3 marks rest 0 mark
  '5': (answer: string) => (answer === '1' ? 3 : 0), // Q6: answer 1 gets 3 marks rest 0 mark
  '6': (answer: string) => (answer === '1' ? 3 : answer === '2' ? 2 : 0), // Q7: answer 1 gets 3 marks, answer 2 gets 2 marks rest gets 0
  '7': (answer: string) => (answer === '1' ? 3 : answer === '2' ? 2 : 0), // Q8: answer 1 gets 3 marks, answer 2 gets 2 marks rest gets 0
  '8': (answer: string) => (answer === '1' ? 3 : 0), // Q9: answer 1 gets 3 marks rest 0 mark
  '9': (answer: string) => (answer === '1' ? 3 : 0), // Q10: answer 1 gets 3 marks rest 0 mark
  '10': (answer: string) => (['1', '2', '3', '4'].includes(answer) ? 3 : 0), // Q11: answers 1,2,3,4 gets 3 marks rest 0 mark
  '11': (answer: string) => (['1', '2', '3', '4'].includes(answer) ? 3 : 0), // Q12: answers 1,2,3,4 gets 3 marks rest 0 mark
}

const skillQuestionMap = {
  self_awareness: ['question_1', 'question_2', 'question_11'],
  social_management: ['question_3', 'question_9', 'question_10'],
  social_awareness: ['question_1', 'question_6'],
  relationship_skills: ['question_5', 'question_7'],
  responsible_decision_making: ['question_8', 'question_10'],
  metacognition: ['question_3', 'question_4', 'question_11', 'question_12'],
  empathy: ['question_6', 'question_5', 'question_7'],
  critical_thinking: ['question_8', 'question_4'],
}

function Slider() {
  return (
    <div className="w-full h-10 bg-gray-200 rounded-full">
      <div className="w-1/2 h-full bg-primary-500 rounded-full"></div>
      <div className="w-1/2 h-full bg-primary-500 rounded-full"></div>
      <div className="w-1/2 h-full bg-primary-500 rounded-full"></div>
    </div>
  )
}

function ChildAssessment() {
  const { t, i18n } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const searchParams = useSearchParams()
  const testType = searchParams.get('testType')
  const langParam = searchParams.get('lang')

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

  const school = ''
  const grade = ''

  const calculateScores = () => {
    let totalScore = 0
    const scores: Record<string, number> = {}
    const skillScores: Record<string, number> = {}

    // Calculate scores for each question
    Object.entries(responses).forEach(([questionIndex, answer]) => {
      const score =
        scoringMatrix[questionIndex as keyof typeof scoringMatrix]?.(answer) ||
        0
      totalScore += score
      scores[`question_${parseInt(questionIndex) + 1}`] = score
    })

    // Calculate scores for each skill based on skillQuestionMap
    Object.entries(skillQuestionMap).forEach(([skill, questions]) => {
      let skillScore = 0
      questions.forEach((question) => {
        skillScore += scores[question] || 0
      })
      skillScores[skill] = skillScore / questions.length
    })

    return { totalScore, scores, skillScores }
  }

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      try {
        const { totalScore, scores, skillScores } = calculateScores()
        const data = {
          school: school || '',
          grade: grade || '',
          overallScore: totalScore / 8,
          scores: JSON.stringify(scores),
          skillScores: JSON.stringify(skillScores),
          answers: JSON.stringify(responses),
          testType,
        }
        await createAssessment(data)
        await updateScores({
          skillScores,
          school,
          grade,
          assessment: 'child',
          testType,
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

  const handleChange = (value: string) => {
    setResponses({
      ...responses,
      [currentQuestion]: value,
    })
  }

  const handleFeedbackResponse = (response: string) => {
    setShowThankYou(true)
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
          <div className="space-y-4 mb-8">
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
      <div className="py-4 bg-primary-500 flex items-center px-4">
        <div className="flex-1 mr-4">
          <Progress current={currentQuestion} total={questions.length} />
        </div>
        <LanguageDropdown />
      </div>
      <div className="w-full max-w-md mx-auto">
        <div className="p-2 rounded-lg">
          <div className="relative bg-white rounded-xl mb-8">
            <img
              src={`/images/${questions[currentQuestion].image}`}
              width={450}
              height={400}
              alt="image"
              className="w-full h-auto max-w-full transition-opacity duration-300"
            />
            <div className="absolute top-[220px] left-2">
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

          <div className="grid grid-cols-2 gap-4 place-items-center">
            {questions[currentQuestion].type === 'slider' ? (
              <Slider />
            ) : questions[currentQuestion].type === 'story' ? null : (
              questions[currentQuestion].answerOptions.map((opt) => (
                <Option
                  key={opt.value}
                  image={opt.image}
                  text={opt.label}
                  value={opt.value}
                  audio={opt.audio}
                  isSelected={responses[currentQuestion] === opt.value}
                  onChange={handleChange}
                />
              ))
            )}
          </div>
        </div>
        <div className="mt-3 text-right px-2">
          <Button onClick={handleNext}>
            {/* <Button onClick={handleNext} disabled={!responses[currentQuestion]}> */}
            {currentQuestion < questions.length - 1
              ? t('common.next')
              : t('common.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}
