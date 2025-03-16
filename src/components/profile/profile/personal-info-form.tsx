"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { User, Mail, Phone, Building, ChevronDown } from "lucide-react";
import { professions } from "@/data/jobs";

type UserInfo = {
  name?: string;
  email?: string;
  phone?: string;
  job?: string;
  picture?: string;
  avatar?: string;
  createdAt?: string;
  role?: string;
};

type PersonalInfoFormProps = {
  user: UserInfo;
  onSave?: (updatedUser: UserInfo) => void;
};

export default function PersonalInfoForm({
  user,
  onSave,
}: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<UserInfo>({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    job: user.job || "",
    picture: user.picture || user.avatar || "",
    role: user.role || "PRESTADOR",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProfessions, setFilteredProfessions] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "job") {
      const filtered = professions.filter((prof) =>
        prof.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProfessions(filtered);
      setShowDropdown(filtered.length > 0);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectJob = (job: string) => {
    setFormData({ ...formData, job });
    setShowDropdown(false);
  };

  const updateUserInfo = async (userData: UserInfo) => {
    try {
      const response = await fetch("http://localhost:3535/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include", 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao atualizar informações");
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Erro desconhecido ao atualizar informações");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.job && !professions.includes(formData.job)) {
      setErrorMessage("Por favor, selecione uma profissão válida da lista.");
      return;
    }

    const changedData: UserInfo = {};
    
    if (formData.name !== user.name) changedData.name = formData.name;
    if (formData.email !== user.email) changedData.email = formData.email;
    if (formData.phone !== user.phone) changedData.phone = formData.phone;
    if (formData.job !== user.job) changedData.job = formData.job;
    if (formData.role !== user.role) changedData.role = formData.role;
    
    if (Object.keys(changedData).length === 0) {
      setErrorMessage("Nenhuma alteração detectada.");
      return;
    }

    setIsLoading(true);
    
    try {
      await updateUserInfo(changedData);
      setSuccessMessage("Informações atualizadas com sucesso!");
      
      if (onSave) {
        onSave({ ...user, ...changedData });
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro ao atualizar informações.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <div className="relative">
            <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* Profissão com dropdown */}
        <div className="relative">
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
            Profissão
          </label>
          <div className="relative">
            <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="profession"
              name="job"
              value={formData.job}
              onChange={handleChange}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {showDropdown && (
            <ul className="absolute w-full mt-1 border border-gray-200 rounded-lg shadow-lg bg-white max-h-40 overflow-y-auto z-50">
              {filteredProfessions.map((prof) => (
                <li
                  key={prof}
                  onClick={() => handleSelectJob(prof)}
                  className="px-4 py-2 cursor-pointer hover:bg-yellow-100"
                >
                  {prof}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors flex items-center"
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </form>
  );
}