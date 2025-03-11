"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import client from "@/assets/client.png";
import presta from "@/assets/presta.png";

const professions: string[] = [
  "Encanador",
  "Eletricista",
  "Carpinteiro",
  "Pintor",
  "Mecânico",
  "Jardineiro",
  "Arquiteto",
  "Engenheiro Civil",
  "Designer de Interiores",
  "Pedreiro",
  "Gesseiro",
  "Motorista",
  "Fotógrafo",
  "Cabeleireiro",
  "Advogado",
  "Contador",
  "Professor",
  "Médico",
  "Enfermeiro",
  "Desenvolvedor Web",
  "Designer Gráfico",
];

type ColumnType = "provider" | "client" | null;

const Home: NextPage = () => {
  const [activeColumn, setActiveColumn] = useState<ColumnType>(null);
  const [profession, setProfession] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleColumnClick = (column: ColumnType): void => {
    setActiveColumn(column);
  };

  const handleProfessionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setProfession(value);

    if (value.trim() !== "") {
      const filtered = professions
        .filter((prof) => prof.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const selectProfession = (selected: string): void => {
    setProfession(selected);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Job Finder - Encontre os melhores profissionais</title>
        <meta
          name="description"
          content="Conectando profissionais qualificados a clientes que precisam de serviços"
        />
      </Head>

      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-gray-800">
              <span className="text-yellow-500">Job</span>Finder
            </span>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer">
              Entrar
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Conectando <span className="text-yellow-500">talentos</span> e{" "}
            <span className="text-yellow-500">oportunidades</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha como deseja se cadastrar na plataforma e comece a usar o Job
            Finder hoje mesmo
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div
            className={`relative flex-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out
              ${activeColumn === "provider" ? "lg:flex-[3]" : "lg:flex-[1]"}`}
            onClick={() => handleColumnClick("provider")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 z-0">
              <div className="absolute inset-0 w-full h-full opacity-30">
                {activeColumn === "provider" ? //   <Image
                //     src={presta}
                //     alt="Prestador de serviço"
                //     layout="fill"
                //     objectFit="contain"
                //     priority
                //   />
                null : (
                  <Image
                    src={presta}
                    alt="Prestador de serviço"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
              {activeColumn === "provider" ? (
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    Cadastro de{" "}
                    <span className="text-yellow-500">Profissional</span>
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="name"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu nome"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu e-mail"
                      />
                    </div>

                    <div className="relative">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="profession"
                      >
                        Profissão
                      </label>
                      <input
                        type="text"
                        id="profession"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite sua profissão"
                        value={profession}
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

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password"
                      >
                        Senha
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Crie uma senha"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="confirm-password"
                      >
                        Confirmar Senha
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Confirme sua senha"
                      />
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    >
                      Cadastrar como Profissional
                    </button>

                    <div className="text-center mt-4">
                      <button
                        type="button"
                        className="text-sm text-yellow-600 hover:text-yellow-800"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveColumn(null);
                        }}
                      >
                        Voltar
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center text-gray-800 p-6">
                  <h2 className="text-3xl font-bold mb-4">
                    Sou um Profissional
                  </h2>
                  <p className="text-lg mb-8">
                    Ofereça seus serviços e encontre novos clientes
                  </p>
                  <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-md cursor-pointer">
                    Quero ser um prestador
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className={`relative flex-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out
              ${activeColumn === "client" ? "lg:flex-[3]" : "lg:flex-[1]"}`}
            onClick={() => handleColumnClick("client")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 z-0">
              <div className="absolute inset-0 w-full h-full opacity-20">
                {activeColumn === "client" ? //   <Image
                //     src={client}
                //     alt="Cliente"
                //     layout="fill"
                //     objectFit="contain"
                //     priority
                //   />
                null : (
                  <Image
                    src={client}
                    alt="Cliente"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
              {activeColumn === "client" ? (
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    Cadastro de <span className="text-yellow-500">Cliente</span>
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="name-client"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name-client"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu nome"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email-client"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email-client"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu e-mail"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="phone"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu telefone"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password-client"
                      >
                        Senha
                      </label>
                      <input
                        type="password"
                        id="password-client"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Crie uma senha"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="confirm-password-client"
                      >
                        Confirmar Senha
                      </label>
                      <input
                        type="password"
                        id="confirm-password-client"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Confirme sua senha"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full p-3 cursor-pointer bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    >
                      Cadastrar como Cliente
                    </button>

                    <div className="text-center mt-4">
                      <button
                        type="button"
                        className="text-sm text-yellow-600 hover:text-yellow-800 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveColumn(null);
                        }}
                      >
                        Voltar
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center text-gray-800 p-6">
                  <h2 className="text-3xl font-bold mb-4">Sou um Cliente</h2>
                  <p className="text-lg mb-8">
                    Encontre os melhores profissionais para seus projetos
                  </p>
                  <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-md cursor-pointer">
                    Quero contratar serviços
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} JobFinder. Todos os direitos
              reservados.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
