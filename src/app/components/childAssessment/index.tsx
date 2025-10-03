import Button from '@/app/components/button'
import Progress from '@/app/components/progress'
import RadioGroup from '@/app/components/radioGroup'

// Import English audio files
// Question audios
import q1AudioEn from '@/assets/audios/en/1. Student Survey_Question 1.mp3'
import q2AudioEn from '@/assets/audios/en/5. Student Survey_Question 2.mp3'
import q3AudioEn from '@/assets/audios/en/9. Student Survey_Question 3.mp3'
import q4AudioEn from '@/assets/audios/en/13. Student Survey_Question 4.mp3'
import q5AudioEn from '@/assets/audios/en/17. Student Survey_Question 5.mp3'
import q6AudioEn from '@/assets/audios/en/21. Student Survey_Question 6.mp3'
import q7AudioEn from '@/assets/audios/en/25. Student Survey_Question 7.mp3'
import q8AudioEn from '@/assets/audios/en/29. Student Survey_Question 8.mp3'
import q9AudioEn from '@/assets/audios/en/33. Student Survey_Question 9.mp3'
import q10AudioEn from '@/assets/audios/en/37. Student Survey_Question 10.mp3'
import q11AudioEn from '@/assets/audios/en/41. Student Survey_Question 11.mp3'
import q12AudioEn from '@/assets/audios/en/47. Student Survey_Question 12.mp3'

// Question 1 options
import q1opt1AudioEn from '@/assets/audios/en/2. Student Survey_Question 1_Option 1.mp3'
import q1opt2AudioEn from '@/assets/audios/en/3. Student Survey_Question 1_Option 2.mp3'
import q1opt3AudioEn from '@/assets/audios/en/4. Student Survey_Question 1_Option 3.mp3'

// Question 2 options
import q2opt1AudioEn from '@/assets/audios/en/6. Student Survey_Question 2_Option 1.mp3'
import q2opt2AudioEn from '@/assets/audios/en/7. Student Survey_Question 2_Option 2.mp3'
import q2opt3AudioEn from '@/assets/audios/en/8. Student Survey_Question 2_Option 3.mp3'

// Question 3 options
import q3opt1AudioEn from '@/assets/audios/en/10. Student Survey_Question 3_Option 1.mp3'
import q3opt2AudioEn from '@/assets/audios/en/11. Student Survey_Question 3_Option 2.mp3'
import q3opt3AudioEn from '@/assets/audios/en/12. Student Survey_Question 3_Option 3.mp3'

// Question 4 options
import q4opt1AudioEn from '@/assets/audios/en/14. Student Survey_Question 4_Option 1.mp3'
import q4opt2AudioEn from '@/assets/audios/en/15. Student Survey_Question 4_Option 2.mp3'
import q4opt3AudioEn from '@/assets/audios/en/16. Student Survey_Question 4_Option 3.mp3'

// Question 5 options
import q5opt1AudioEn from '@/assets/audios/en/18. Student Survey_Question 5_Option 1.mp3'
import q5opt2AudioEn from '@/assets/audios/en/19. Student Survey_Question 5_Option 2.mp3'
import q5opt3AudioEn from '@/assets/audios/en/20. Student Survey_Question 5_Option 3.mp3'

// Question 6 options
import q6opt1AudioEn from '@/assets/audios/en/22. Student Survey_Question 6_Option 1.mp3'
import q6opt2AudioEn from '@/assets/audios/en/23. Student Survey_Question 6_Option 2.mp3'
import q6opt3AudioEn from '@/assets/audios/en/24. Student Survey_Question 6_Option 3.mp3'

// Question 7 options
import q7opt1AudioEn from '@/assets/audios/en/26. Student Survey_Question 7_Option 1.mp3'
import q7opt2AudioEn from '@/assets/audios/en/27. Student Survey_Question 7_Option 2.mp3'
import q7opt3AudioEn from '@/assets/audios/en/28. Student Survey_Question 7_Option 3.mp3'

// Question 8 options
import q8opt1AudioEn from '@/assets/audios/en/30. Student Survey_Question 8_Option 1.mp3'
import q8opt2AudioEn from '@/assets/audios/en/31. Student Survey_Question 8_Option 2.mp3'
import q8opt3AudioEn from '@/assets/audios/en/32. Student Survey_Question 8_Option 3.mp3'

// Question 9 options
import q9opt1AudioEn from '@/assets/audios/en/34. Student Survey_Question 9_Option 1.mp3'
import q9opt2AudioEn from '@/assets/audios/en/35. Student Survey_Question 9_Option 2.mp3'
import q9opt3AudioEn from '@/assets/audios/en/36. Student Survey_Question 9_Option 3.mp3'

// Question 10 options
import q10opt1AudioEn from '@/assets/audios/en/38. Student Survey_Question 10_Option 1.mp3'
import q10opt2AudioEn from '@/assets/audios/en/39. Student Survey_Question 10_Option 2.mp3'
import q10opt3AudioEn from '@/assets/audios/en/40. Student Survey_Question 10_Option 3.mp3'

// Question 11 options (has 5 options)
import q11opt1AudioEn from '@/assets/audios/en/42. Student Survey_Question 11_Option 1.mp3'
import q11opt2AudioEn from '@/assets/audios/en/43. Student Survey_Question 11_Option 2.mp3'
import q11opt3AudioEn from '@/assets/audios/en/44. Student Survey_Question 11_Option 3.mp3'
import q11opt4AudioEn from '@/assets/audios/en/45. Student Survey_Question 11_Option 4.mp3'
import q11opt5AudioEn from '@/assets/audios/en/46. Student Survey_Question 11_Option 5.mp3'

// Question 12 options (has 5 options)
import q12opt1AudioEn from '@/assets/audios/en/48. Student Survey_Question 12_Option 1.mp3'
import q12opt2AudioEn from '@/assets/audios/en/49. Student Survey_Question 12_Option 2.mp3'
import q12opt3AudioEn from '@/assets/audios/en/50. Student Survey_Question 12_Option 3.mp3'
import q12opt4AudioEn from '@/assets/audios/en/51. Student Survey_Question 12_Option 4.mp3'
import q12opt5AudioEn from '@/assets/audios/en/52. Student Survey_Question 12_Option 5.mp3'

// Common "I do not know" audio
import dontKnowAudioEn from '@/assets/audios/en/53. Student Survey_I Do Not Know.mp3'

// Import Arabic audio files
// Question audios
import q1AudioAr from '@/assets/audios/ar/1. Arabic_Student Survey_Question 1.mp3'
import q2AudioAr from '@/assets/audios/ar/5. Arabic_Student Survey_Question 2.mp3'
import q3AudioAr from '@/assets/audios/ar/9. Arabic_Student Survey_Question 3.mp3'
import q4AudioAr from '@/assets/audios/ar/13. Arabic_Student Survey_Question 4.mp3'
import q5AudioAr from '@/assets/audios/ar/17. Arabic_Student Survey_Question 5.mp3'
import q6AudioAr from '@/assets/audios/ar/21. Arabic_Student Survey_Question 6.mp3'
import q7AudioAr from '@/assets/audios/ar/25. Arabic_Student Survey_Question 7.mp3'
import q8AudioAr from '@/assets/audios/ar/29. Arabic_Student Survey_Question 8.mp3'
import q9AudioAr from '@/assets/audios/ar/33. Arabic_Student Survey_Question 9.mp3'
import q10AudioAr from '@/assets/audios/ar/37. Arabic_Student Survey_Question 10.mp3'
import q11AudioAr from '@/assets/audios/ar/41. Arabic_Student Survey_Question 11.mp3'
import q12AudioAr from '@/assets/audios/ar/47. Arabic_Student Survey_Question 12.mp3'

// Question 1 options
import q1opt1AudioAr from '@/assets/audios/ar/2. Arabic_Student Survey_Question 1_Option 1.mp3'
import q1opt2AudioAr from '@/assets/audios/ar/3. Arabic_Student Survey_Question 1_Option 2.mp3'
import q1opt3AudioAr from '@/assets/audios/ar/4. Arabic_Student Survey_Question 1_Option 3.mp3'

// Question 2 options
import q2opt1AudioAr from '@/assets/audios/ar/6. Arabic_Student Survey_Question 2_Option 1.mp3'
import q2opt2AudioAr from '@/assets/audios/ar/7. Arabic_Student Survey_Question 2_Option 2.mp3'
import q2opt3AudioAr from '@/assets/audios/ar/8. Arabic_Student Survey_Question 2_Option 3.mp3'

// Question 3 options
import q3opt1AudioAr from '@/assets/audios/ar/10. Arabic_Student Survey_Question 3_Option 1.mp3'
import q3opt2AudioAr from '@/assets/audios/ar/11. Arabic_Student Survey_Question 3_Option 2.mp3'
import q3opt3AudioAr from '@/assets/audios/ar/12. Arabic_Student Survey_Question 3_Option 3.mp3'

// Question 4 options
import q4opt1AudioAr from '@/assets/audios/ar/14. Arabic_Student Survey_Question 4_Option 1.mp3'
import q4opt2AudioAr from '@/assets/audios/ar/15. Arabic_Student Survey_Question 4_Option 2.mp3'
import q4opt3AudioAr from '@/assets/audios/ar/16. Arabic_Student Survey_Question 4_Option 3.mp3'

// Question 5 options
import q5opt1AudioAr from '@/assets/audios/ar/18. Arabic_Student Survey_Question 5_Option 1.mp3'
import q5opt2AudioAr from '@/assets/audios/ar/19. Arabic_Student Survey_Question 5_Option 2.mp3'
import q5opt3AudioAr from '@/assets/audios/ar/20. Arabic_Student Survey_Question 5_Option 3.mp3'

// Question 6 options
import q6opt1AudioAr from '@/assets/audios/ar/22. Arabic_Student Survey_Question 6_Option 1.mp3'
import q6opt2AudioAr from '@/assets/audios/ar/23. Arabic_Student Survey_Question 6_Option 2.mp3'
import q6opt3AudioAr from '@/assets/audios/ar/24. Arabic_Student Survey_Question 6_Option 3.mp3'

// Question 7 options
import q7opt1AudioAr from '@/assets/audios/ar/26. Arabic_Student Survey_Question 7_Option 1.mp3'
import q7opt2AudioAr from '@/assets/audios/ar/27. Arabic_Student Survey_Question 7_Option 2.mp3'
import q7opt3AudioAr from '@/assets/audios/ar/28. Arabic_Student Survey_Question 7_Option 3.mp3'

// Question 8 options
import q8opt1AudioAr from '@/assets/audios/ar/30. Arabic_Student Survey_Question 8_Option 1.mp3'
import q8opt2AudioAr from '@/assets/audios/ar/31. Arabic_Student Survey_Question 8_Option 2.mp3'
import q8opt3AudioAr from '@/assets/audios/ar/32. Arabic_Student Survey_Question 8_Option 3.mp3'

// Question 9 options
import q9opt1AudioAr from '@/assets/audios/ar/34. Arabic_Student Survey_Question 9_Option 1.mp3'
import q9opt2AudioAr from '@/assets/audios/ar/35. Arabic_Student Survey_Question 9_Option 2.mp3'
import q9opt3AudioAr from '@/assets/audios/ar/36. Arabic_Student Survey_Question 9_Option 3.mp3'

// Question 10 options
import q10opt1AudioAr from '@/assets/audios/ar/38. Arabic_Student Survey_Question 10_Option 1.mp3'
import q10opt2AudioAr from '@/assets/audios/ar/39. Arabic_Student Survey_Question 10_Option 2.mp3'
import q10opt3AudioAr from '@/assets/audios/ar/40. Arabic_Student Survey_Question 10_Option 3.mp3'

// Question 11 options (has 5 options)
import q11opt1AudioAr from '@/assets/audios/ar/42. Arabic_Student Survey_Question 11_Option 1.mp3'
import q11opt2AudioAr from '@/assets/audios/ar/43. Arabic_Student Survey_Question 11_Option 2.mp3'
import q11opt3AudioAr from '@/assets/audios/ar/44. Arabic_Student Survey_Question 11_Option 3.mp3'
import q11opt4AudioAr from '@/assets/audios/ar/45. Arabic_Student Survey_Question 11_Option 4.mp3'
import q11opt5AudioAr from '@/assets/audios/ar/46. Arabic_Student Survey_Question 11_Option 5.mp3'

// Question 12 options (has 5 options)
import q12opt1AudioAr from '@/assets/audios/ar/48. Arabic_Student Survey_Question 12_Option 1.mp3'
import q12opt2AudioAr from '@/assets/audios/ar/49. Arabic_Student Survey_Question 12_Option 2.mp3'
import q12opt3AudioAr from '@/assets/audios/ar/50. Arabic_Student Survey_Question 12_Option 3.mp3'
import q12opt4AudioAr from '@/assets/audios/ar/51. Arabic_Student Survey_Question 12_Option 4.mp3'
import q12opt5AudioAr from '@/assets/audios/ar/52. Arabic_Student Survey_Question 12_Option 5.mp3'

// Common "I do not know" audio
import dontKnowAudioAr from '@/assets/audios/ar/53. Arabic_Student Survey_I Do Not Know.mp3'
import AudioIcon from '@/assets/svg/AudioIcon'
import { createAssessment } from '@/services/appwrite'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from '../languageDropdown'
import { getGrades, getSchools } from '@/utils/schools'

// Function to get audio files based on language
const getAudioFiles = (language: string) => {
  const isArabic = language === 'ar'

  return {
    // Question audios
    q1Audio: isArabic ? q1AudioAr : q1AudioEn,
    q2Audio: isArabic ? q2AudioAr : q2AudioEn,
    q3Audio: isArabic ? q3AudioAr : q3AudioEn,
    q4Audio: isArabic ? q4AudioAr : q4AudioEn,
    q5Audio: isArabic ? q5AudioAr : q5AudioEn,
    q6Audio: isArabic ? q6AudioAr : q6AudioEn,
    q7Audio: isArabic ? q7AudioAr : q7AudioEn,
    q8Audio: isArabic ? q8AudioAr : q8AudioEn,
    q9Audio: isArabic ? q9AudioAr : q9AudioEn,
    q10Audio: isArabic ? q10AudioAr : q10AudioEn,
    q11Audio: isArabic ? q11AudioAr : q11AudioEn,
    q12Audio: isArabic ? q12AudioAr : q12AudioEn,

    // Question 1 options
    q1opt1Audio: isArabic ? q1opt1AudioAr : q1opt1AudioEn,
    q1opt2Audio: isArabic ? q1opt2AudioAr : q1opt2AudioEn,
    q1opt3Audio: isArabic ? q1opt3AudioAr : q1opt3AudioEn,

    // Question 2 options
    q2opt1Audio: isArabic ? q2opt1AudioAr : q2opt1AudioEn,
    q2opt2Audio: isArabic ? q2opt2AudioAr : q2opt2AudioEn,
    q2opt3Audio: isArabic ? q2opt3AudioAr : q2opt3AudioEn,

    // Question 3 options
    q3opt1Audio: isArabic ? q3opt1AudioAr : q3opt1AudioEn,
    q3opt2Audio: isArabic ? q3opt2AudioAr : q3opt2AudioEn,
    q3opt3Audio: isArabic ? q3opt3AudioAr : q3opt3AudioEn,

    // Question 4 options
    q4opt1Audio: isArabic ? q4opt1AudioAr : q4opt1AudioEn,
    q4opt2Audio: isArabic ? q4opt2AudioAr : q4opt2AudioEn,
    q4opt3Audio: isArabic ? q4opt3AudioAr : q4opt3AudioEn,

    // Question 5 options
    q5opt1Audio: isArabic ? q5opt1AudioAr : q5opt1AudioEn,
    q5opt2Audio: isArabic ? q5opt2AudioAr : q5opt2AudioEn,
    q5opt3Audio: isArabic ? q5opt3AudioAr : q5opt3AudioEn,

    // Question 6 options
    q6opt1Audio: isArabic ? q6opt1AudioAr : q6opt1AudioEn,
    q6opt2Audio: isArabic ? q6opt2AudioAr : q6opt2AudioEn,
    q6opt3Audio: isArabic ? q6opt3AudioAr : q6opt3AudioEn,

    // Question 7 options
    q7opt1Audio: isArabic ? q7opt1AudioAr : q7opt1AudioEn,
    q7opt2Audio: isArabic ? q7opt2AudioAr : q7opt2AudioEn,
    q7opt3Audio: isArabic ? q7opt3AudioAr : q7opt3AudioEn,

    // Question 8 options
    q8opt1Audio: isArabic ? q8opt1AudioAr : q8opt1AudioEn,
    q8opt2Audio: isArabic ? q8opt2AudioAr : q8opt2AudioEn,
    q8opt3Audio: isArabic ? q8opt3AudioAr : q8opt3AudioEn,

    // Question 9 options
    q9opt1Audio: isArabic ? q9opt1AudioAr : q9opt1AudioEn,
    q9opt2Audio: isArabic ? q9opt2AudioAr : q9opt2AudioEn,
    q9opt3Audio: isArabic ? q9opt3AudioAr : q9opt3AudioEn,

    // Question 10 options
    q10opt1Audio: isArabic ? q10opt1AudioAr : q10opt1AudioEn,
    q10opt2Audio: isArabic ? q10opt2AudioAr : q10opt2AudioEn,
    q10opt3Audio: isArabic ? q10opt3AudioAr : q10opt3AudioEn,

    // Question 11 options
    q11opt1Audio: isArabic ? q11opt1AudioAr : q11opt1AudioEn,
    q11opt2Audio: isArabic ? q11opt2AudioAr : q11opt2AudioEn,
    q11opt3Audio: isArabic ? q11opt3AudioAr : q11opt3AudioEn,
    q11opt4Audio: isArabic ? q11opt4AudioAr : q11opt4AudioEn,
    q11opt5Audio: isArabic ? q11opt5AudioAr : q11opt5AudioEn,

    // Question 12 options
    q12opt1Audio: isArabic ? q12opt1AudioAr : q12opt1AudioEn,
    q12opt2Audio: isArabic ? q12opt2AudioAr : q12opt2AudioEn,
    q12opt3Audio: isArabic ? q12opt3AudioAr : q12opt3AudioEn,
    q12opt4Audio: isArabic ? q12opt4AudioAr : q12opt4AudioEn,
    q12opt5Audio: isArabic ? q12opt5AudioAr : q12opt5AudioEn,

    // Common "I do not know" audio
    dontKnowAudio: isArabic ? dontKnowAudioAr : dontKnowAudioEn,
  }
}

const getQuestions = (t: any, language: string) => {
  const audioFiles = getAudioFiles(language)

  return [
    {
      question: t('assessment.questions.q1'),
      questionAudio: audioFiles.q1Audio,
      answerAudio: [
        audioFiles.q1opt1Audio,
        audioFiles.q1opt2Audio,
        audioFiles.q1opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.happy'), value: '1' },
        { label: t('assessment.answers.sad'), value: '2' },
        { label: t('assessment.answers.angry'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '1.png',
    },
    {
      question: t('assessment.questions.q2'),
      questionAudio: audioFiles.q2Audio,
      answerAudio: [
        audioFiles.q2opt1Audio,
        audioFiles.q2opt2Audio,
        audioFiles.q2opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.apple'), value: '1' },
        { label: t('assessment.answers.cookie'), value: '2' },
        { label: t('assessment.answers.iDoNotLikeEither'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '2.png',
    },
    {
      question: t('assessment.questions.q3'),
      questionAudio: audioFiles.q3Audio,
      answerAudio: [
        audioFiles.q3opt1Audio,
        audioFiles.q3opt2Audio,
        audioFiles.q3opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.tryAgain'), value: '1' },
        { label: t('assessment.answers.cryAndStop'), value: '2' },
        { label: t('assessment.answers.walkAway'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '3.png',
    },
    {
      question: t('assessment.questions.q4'),
      questionAudio: audioFiles.q4Audio,
      answerAudio: [
        audioFiles.q4opt1Audio,
        audioFiles.q4opt2Audio,
        audioFiles.q4opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.canYouHelpMe'), value: '1' },
        { label: t('assessment.answers.stayQuiet'), value: '2' },
        { label: t('assessment.answers.iGiveUp'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '3.png',
    },
    {
      question: t('assessment.questions.q5'),
      questionAudio: audioFiles.q5Audio,
      answerAudio: [
        audioFiles.q5opt1Audio,
        audioFiles.q5opt2Audio,
        audioFiles.q5opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.helpHerUp'), value: '1' },
        { label: t('assessment.answers.giveHerAHug'), value: '2' },
        { label: t('assessment.answers.walkAway'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '4.png',
    },
    {
      question: t('assessment.questions.q6'),
      questionAudio: audioFiles.q6Audio,
      answerAudio: [
        audioFiles.q6opt1Audio,
        audioFiles.q6opt2Audio,
        audioFiles.q6opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.sad'), value: '1' },
        { label: t('assessment.answers.happy'), value: '2' },
        { label: t('assessment.answers.mad'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '4.png',
    },
    {
      question: t('assessment.questions.q7'),
      questionAudio: audioFiles.q7Audio,
      answerAudio: [
        audioFiles.q7opt1Audio,
        audioFiles.q7opt2Audio,
        audioFiles.q7opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.areYouOkay'), value: '1' },
        { label: t('assessment.answers.stopCrying'), value: '2' },
        { label: t('assessment.answers.nothing'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '4.png',
    },
    {
      question: t('assessment.questions.q8'),
      questionAudio: audioFiles.q8Audio,
      answerAudio: [
        audioFiles.q8opt1Audio,
        audioFiles.q8opt2Audio,
        audioFiles.q8opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.takeTurns'), value: '1' },
        { label: t('assessment.answers.tellATeacher'), value: '2' },
        { label: t('assessment.answers.grabItBack'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '5.png',
    },
    {
      question: t('assessment.questions.q9'),
      questionAudio: audioFiles.q9Audio,
      answerAudio: [
        audioFiles.q9opt1Audio,
        audioFiles.q9opt2Audio,
        audioFiles.q9opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.takeDeepBreaths'), value: '1' },
        { label: t('assessment.answers.hitSomething'), value: '2' },
        { label: t('assessment.answers.scream'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '6.png',
    },
    {
      question: t('assessment.questions.q10'),
      questionAudio: audioFiles.q10Audio,
      answerAudio: [
        audioFiles.q10opt1Audio,
        audioFiles.q10opt2Audio,
        audioFiles.q10opt3Audio,
        audioFiles.dontKnowAudio,
      ],
      answerOptions: [
        { label: t('assessment.answers.waitTheirTurn'), value: '1' },
        { label: t('assessment.answers.pushToTheFront'), value: '2' },
        { label: t('assessment.answers.leave'), value: '3' },
        { label: t('common.iDoNotKnow'), value: '999' },
      ],
      image: '7.png',
    },
    {
      question: t('assessment.questions.q11'),
      questionAudio: audioFiles.q11Audio,
      answerAudio: [
        audioFiles.q11opt1Audio,
        audioFiles.q11opt2Audio,
        audioFiles.q11opt3Audio,
        audioFiles.q11opt4Audio,
        audioFiles.q11opt5Audio,
      ],
      answerOptions: [
        { label: t('assessment.answers.drawingOrArt'), value: '1' },
        { label: t('assessment.answers.sportsOrGames'), value: '2' },
        { label: t('assessment.answers.helpingOthers'), value: '3' },
        { label: t('assessment.answers.readingOrWriting'), value: '4' },
        { label: t('assessment.answers.iAmNotSureYet'), value: '999' },
      ],
      image: '8.png',
    },
    {
      question: t('assessment.questions.q12'),
      questionAudio: audioFiles.q12Audio,
      answerAudio: [
        audioFiles.q12opt1Audio,
        audioFiles.q12opt2Audio,
        audioFiles.q12opt3Audio,
        audioFiles.q12opt4Audio,
        audioFiles.q12opt5Audio,
      ],
      answerOptions: [
        { label: t('assessment.answers.readingOrWriting'), value: '1' },
        { label: t('assessment.answers.talkingToOthers'), value: '2' },
        { label: t('assessment.answers.controllingMyFeelings'), value: '3' },
        { label: t('assessment.answers.drawingOrArt'), value: '4' },
        { label: t('assessment.answers.iDoNotKnowYet'), value: '999' },
      ],
      image: '8.png',
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
  const schoolParam = searchParams.get('school')
  const gradeParam = searchParams.get('grade')
  const questions = getQuestions(t, i18n.language)

  const schools = getSchools(t)
  const grades = getGrades(t)
  const school =
    schools.find((s) => s.value === schoolParam)?.label || schoolParam || ''
  const grade =
    grades.find((g) => g.value === gradeParam)?.label || gradeParam || ''

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
          overallScore: totalScore,
          scores: JSON.stringify(scores),
          skillScores: JSON.stringify(skillScores),
          answers: JSON.stringify(responses),
          testType,
        }
        await createAssessment(data)
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
      <div className="w-full max-w-md mx-auto p-2 md:p-4">
        <div className="bg-white p-3 md:p-4 rounded-lg">
          <div className="relative">
            <img
              src={`/images/${questions[currentQuestion].image}`}
              width={450}
              height={400}
              alt="image"
              className="w-full h-auto max-w-full transition-opacity duration-300"
            />
            <div className="absolute bottom-2 left-2">
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
          </div>
          <div className="text-lg md:text-2xl font-medium my-4 text-gray-500 px-2">
            {questions[currentQuestion].question}
          </div>
          <RadioGroup
            options={questions[currentQuestion].answerOptions.map(
              (opt, idx) => ({
                ...opt,
                audio: questions[currentQuestion].answerAudio[idx],
              }),
            )}
            selected={responses[currentQuestion] || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 text-right px-2">
          <Button onClick={handleNext} disabled={!responses[currentQuestion]}>
            {currentQuestion < questions.length - 1
              ? t('common.next')
              : t('common.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}
