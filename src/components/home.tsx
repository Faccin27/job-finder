"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function Home() {
  const [activeColumn, setActiveColumn] = useState<ColumnType>(null);
  const [profession, setProfession] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

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
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-gray-800">
              <span className="text-yellow-500">Job</span>Finder
            </span>
          </div>
          <div className="space-x-4">
            <button 
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer"
              onClick={() => setIsLoginOpen(true)}
            >
              Entrar
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                {activeColumn === "provider" ? null : (
                  <Image
                    src={presta || "/placeholder.svg"}
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

                    <div>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="phone-provider"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone-provider"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Digite seu telefone"
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
                {activeColumn === "client" ? null : (
                  <Image
                    src={client || "/placeholder.svg"}
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

      <footer className="bg-gray-50 py-8 mt-auto">
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

      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </div>
  );
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Login com:", email, password);
      onClose();
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Entrar no <span className="text-yellow-500">JobFinder</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="login-email">
              E-mail
            </label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="login-password">
              Senha
            </label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Digite sua senha"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Lembrar-me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="text-yellow-500 hover:text-yellow-700">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={onClose}
                className="text-yellow-500 hover:text-yellow-700"
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}