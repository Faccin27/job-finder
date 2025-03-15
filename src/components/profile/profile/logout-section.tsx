import { useCallback } from "react";
import { LogOut } from "lucide-react";

export default function LogoutSection() {

    const handleLogout = useCallback(async () => {
      await fetch("http://localhost:3535/users/logout", {
        method: "POST",
        credentials: "include",
      });
      window.location.reload();
    }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <LogOut size={20} className="text-gray-400 mr-2" />
        <div>
          <p className="font-medium text-gray-900">Sair da conta</p>
          <p className="text-sm text-gray-500">Encerrar sua sessão atual</p>
        </div>
      </div>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition-colors cursor-pointer">
        Sair
      </button>
    </div>
  );
}
