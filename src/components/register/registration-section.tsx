"use client"

import { useState } from "react"
import RegistrationColumn from "./registration-column"
import ProviderForm from "./provider-form"
import ClientForm from "./client-form"
import client from '@/assets/client.png'
import presta from '@/assets/presta.png'

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
]

type ColumnType = "provider" | "client" | null

export default function RegistrationSection() {
  const [activeColumn, setActiveColumn] = useState<ColumnType>(null)

  const handleColumnClick = (column: ColumnType): void => {
    setActiveColumn(column)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      <RegistrationColumn
        type="provider"
        isActive={activeColumn === "provider"}
        onClick={() => handleColumnClick("provider")}
        title="Sou um Profissional"
        description="Ofereça seus serviços e encontre novos clientes"
        buttonText="Quero ser um prestador"
        imageSrc={presta}
      >
        <ProviderForm onBack={() => setActiveColumn(null)} professions={professions} />
      </RegistrationColumn>

      <RegistrationColumn
        type="client"
        isActive={activeColumn === "client"}
        onClick={() => handleColumnClick("client")}
        title="Sou um Cliente"
        description="Encontre os melhores profissionais para seus projetos"
        buttonText="Quero contratar serviços"
        imageSrc={client}
      >
        <ClientForm onBack={() => setActiveColumn(null)} />
      </RegistrationColumn>
    </div>
  )
}

