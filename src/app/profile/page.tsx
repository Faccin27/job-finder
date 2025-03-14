"use client"

import { useState } from "react"
import Header from "@/components/profile/layout/header"
import Footer from "@/components/profile/layout/footer"
import ProfileHeader from "@/components/profile/profile/profile-header"
import PersonalInfoForm from "@/components/profile/profile/personal-info-form"
import PasswordSection from "@/components/profile/profile/password-section"
import LogoutSection from "@/components/profile/profile/logout-section"
import SuccessAlert from "@/components/profile/ui/success-alert"


export default function ProfilePage() {
  // Estado do usuário
  const [user, setUser] = useState({
    name: "Willian Deitosi",
    email: "Willian@sexyshop.com",
    phone: "(11) 98765-4321",
    profession: "Encanador",
    memberSince: "12 de Março de 1824",
    avatar: "/placeholder.svg?height=200&width=200",
  })

  const [successMessage, setSuccessMessage] = useState("")

  // Função para mostrar mensagem de sucesso
  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  // Função para atualizar o avatar
  const updateAvatar = (avatarUrl: string) => {
    setUser({ ...user, avatar: avatarUrl })
    showSuccessMessage("Foto de perfil atualizada com sucesso!")
  }

  // Função para atualizar informações do usuário
  const updateUserInfo = (updatedUser: typeof user) => {
    setUser(updatedUser)
    showSuccessMessage("Informações atualizadas com sucesso!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <main className="container mx-auto px-4 py-8">
        {successMessage && <SuccessAlert message={successMessage} />}

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Meu Perfil</h1>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <ProfileHeader user={user} onAvatarChange={updateAvatar} />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
              <PersonalInfoForm user={user} onSave={updateUserInfo} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Segurança</h3>
              <PasswordSection onPasswordChange={() => showSuccessMessage("Senha atualizada com sucesso!")} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conta</h3>
              <LogoutSection />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

