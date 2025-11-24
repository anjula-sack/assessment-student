import React from 'react'

interface OptionProps {
  image: string
  text: string
  value: string
  audio: string
  score: number
  questionId: string
  isSelected: boolean
  onChange: (value: string, score: number, questionId: string) => void
}

function Option({
  image,
  text,
  value,
  audio,
  isSelected,
  onChange,
  score,
  questionId,
}: OptionProps) {
  const handleOptionClick = () => {
    if (audio) {
      new Audio(audio).play()
    }
    onChange(value, score, questionId)
  }

  return (
    <div
      onClick={handleOptionClick}
      className={`relative cursor-pointer p-2 rounded-xl border bg-white
        ${isSelected ? 'border-blue-400 shadow-md' : 'border-transparent'}
      `}
      style={{ width: 180 }}
    >
      {/* Image */}
      <img
        src={`/images/answers/${image}`}
        alt={text}
        className="rounded-lg w-full object-contain"
      />

      {/* Label */}
      <p className="text-center mt-2 font-medium">{text}</p>

      {/* Cat overlay when selected */}
      {isSelected && (
        <img
          src="/images/selected.png"
          alt="selected"
          className="absolute -top-8 -right-8 w-24 h-24"
        />
      )}
    </div>
  )
}

export default Option
