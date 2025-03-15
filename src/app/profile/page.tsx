"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ProfileHeader from "@/components/profile/profile/profile-header";
import PersonalInfoForm from "@/components/profile/profile/personal-info-form";
import PasswordSection from "@/components/profile/profile/password-section";
import LogoutSection from "@/components/profile/profile/logout-section";
import SuccessAlert from "@/components/profile/ui/success-alert";

export default function ProfilePage() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    profession: string;
    memberSince: string;
    avatar: string;
  } | null>(null);

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Função para mostrar mensagem de sucesso
  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Função para atualizar o avatar
  const updateAvatar = (avatarUrl: string) => {
    setUser((prevUser) => prevUser ? { ...prevUser, avatar: avatarUrl } : prevUser);
    showSuccessMessage("Foto de perfil atualizada com sucesso!");
  };

  // Função para atualizar informações do usuário
  const updateUserInfo = (updatedUser: typeof user) => {
    setUser(updatedUser);
    showSuccessMessage("Informações atualizadas com sucesso!");
  };

  // Função para buscar o usuário
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Verificando login do usuário...");

        const response = await fetch("http://localhost:3535/users/me", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log(userData)
          setUser(userData); // Usuário logado
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <div>Usuário não encontrado.</div>;
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informações Pessoais
              </h3>
              <PersonalInfoForm user={user} onSave={updateUserInfo} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Segurança
              </h3>
              <PasswordSection
                onPasswordChange={() =>
                  showSuccessMessage("Senha atualizada com sucesso!")
                }
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Conta
              </h3>
              <LogoutSection />
            </div>
          </div>
        </div>
      </main>

      <div className="mt-52"></div>

      <Footer />
    </div>
  );
}
