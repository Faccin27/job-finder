"use client"

import type React from "react"

import { useState } from "react"

interface ProfessionInputProps {
  professions: string[]
  value: string
  onChange: (value: string) => void
}

export default function ProfessionInput({ professions, value, onChange }: ProfessionInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    onChange(newValue)

    if (newValue.trim() !== "") {
      const filtered = professions.filter((prof) => prof.toLowerCase().includes(newValue.toLowerCase())).slice(0, 5)
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const selectProfession = (selected: string): void => {
    onChange(selected)
    setSuggestions([])
  }

  return (
    <div className="relative">
      <label className="block text-gray-700 mb-2" htmlFor="profession">
        Profissão
      </label>
      <input
        type="text"
        id="profession"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        placeholder="Digite sua profissão"
        value={value}
        onChange={handleProfessionChange}
      />

      {suggestions.length > 0 && (
        <div className="absolute z-10 bg-white w-full mt-1 border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => selectProfession(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

