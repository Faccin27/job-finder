"use client";

import { useState } from "react";
import ProfessionInput from "./profession-input";
import { picture } from "framer-motion/client";

interface ProviderFormProps {
  onBack: () => void;
  professions: string[];
}

export default function ProviderForm({
  onBack,
  professions,
}: ProviderFormProps) {
  const [profession, setProfession] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    picture: "",
    job: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3535/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: "PRESTADOR",
          picture: formData.picture || "https://exemplo.com/foto.jpg",
          job: formData.job,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar cliente");
      }

      alert("Cadastro realizado com sucesso!");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        picture: "",
        job: "",
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Cadastro de <span className="text-yellow-500">Profissional</span>
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu telefone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <ProfessionInput
          professions={professions}
          value={formData.job}
          onChange={(value) => setFormData((prev) => ({ ...prev, job: value }))}
        />

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Crie uma senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar como Profissional"}
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-sm text-yellow-600 hover:text-yellow-800"
            onClick={(e) => {
              e.stopPropagation();
              onBack();
            }}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
