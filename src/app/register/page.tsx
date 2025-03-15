"use client";
import { useEffect, useState } from "react";
import Home from "@/components/register/home";

export default function Page() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return "loading";
  }

  if (user) {
    window.location.href = "/";
  }

  if (!user) {
    return <Home />;
  }
}
