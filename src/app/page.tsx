"use client"
import Navbar from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { ProfessionalsSection } from "@/components/home/professionals-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { CTASection } from "@/components/home/cta-section"
import { categories, professionals, steps } from "@/data/mock-data"
import { useState, useEffect } from "react"

export default function Home() {
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

    if(!user || loading){
      return (
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <HeroSection />
            <CategoriesSection categories={categories} />
            <ProfessionalsSection professionals={professionals} />
            <HowItWorks steps={steps} />
            <CTASection />
          </main>
          <Footer />
        </div>
      )
    }

    if(user){
      return (
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <HeroSection />
            <CategoriesSection categories={categories} />
            <ProfessionalsSection professionals={professionals} />
            <HowItWorks steps={steps} />
          </main>
          <Footer />
        </div>
      )
    }

}

