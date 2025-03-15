"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { User, Mail, Phone, Building, ChevronDown } from "lucide-react";
import { professions } from "@/data/jobs";

type UserInfo = {
  name: string;
  email: string;
  phone: string;
  job: string;
  avatar: string;
  createdAt: string;
};

type PersonalInfoFormProps = {
  user: UserInfo;
  onSave: (updatedUser: UserInfo) => void;
};

export default function PersonalInfoForm({
  user,
  onSave,
}: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<UserInfo>(user);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProfessions, setFilteredProfessions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "job") {
      // Filtra as profissões baseando-se no input
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Impede envio caso a profissão digitada não esteja na lista
    if (!professions.includes(formData.job)) {
      alert("Por favor, selecione uma profissão válida da lista.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSave(formData);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
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
