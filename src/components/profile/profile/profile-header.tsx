"use client"

import { useRef, type ChangeEvent } from "react"
import Image, { StaticImageData } from "next/image"
import { Camera, Calendar } from "lucide-react"
import Willian from '@/assets/willian.png'


type ProfileHeaderProps = {
  user: {
    name: string
    job: string
    createdAt: string
    avatar:  StaticImageData
    picture: string
  }
  onAvatarChange: (avatarUrl: string) => void
}

export default function ProfileHeader({ user, onAvatarChange }: ProfileHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      onAvatarChange(imageUrl)
    }
  }


  return (
    <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row items-center gap-6">
      <div className="relative">
        <Image
          src={user.picture}
          alt={user.name}
          width={120}
          height={120}
          className="rounded-full border-4 border-gray-100"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-0 right-0 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors"
        >
          <Camera size={18} />
        </button>
        <input type="file" ref={fileInputRef} onChange={handleAvatarChange} className="hidden" accept="image/*" />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-500">{user.job}</p>
        <div className="flex items-center justify-center md:justify-start mt-2 text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          <span>Membro desde {user.createdAt}</span>
        </div>
      </div>
    </div>
  )
}

