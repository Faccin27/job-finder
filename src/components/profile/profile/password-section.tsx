"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Lock } from "lucide-react";

type PasswordSectionProps = {
  onPasswordChange: () => void;
};

export default function PasswordSection({
  onPasswordChange,
}: PasswordSectionProps) {
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSavePassword = (e: FormEvent) => {
    e.preventDefault();

    if (passwords.new !== passwords.confirm) {
      alert("As senhas não coincidem!");
      return;
    }

    setIsLoading(true);

    // Simulação de uma chamada de API
    setTimeout(() => {
      setIsLoading(false);
      setIsEditingPassword(false);
      setPasswords({ current: "", new: "", confirm: "" });
      onPasswordChange();
    }, 1000);
  };

  return (
    <>
      {!isEditingPassword ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Lock size={20} className="text-gray-400 mr-2" />
            <div>
              <p className="font-medium text-gray-900">Senha</p>
              <p className="text-sm text-gray-500">
                Última alteração há 3 meses
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEditingPassword(true)}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Alterar Senha
          </button>
        </div>
      ) : (
        <form onSubmit={handleSavePassword}>
          <div className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="current"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha Atual
              </label>
              <input
                type="password"
                id="current"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="new"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nova Senha
              </label>
              <input
                type="password"
                id="new"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirmar Nova Senha
              </label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditingPassword(false)}
              className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Salvando..." : "Salvar Nova Senha"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
