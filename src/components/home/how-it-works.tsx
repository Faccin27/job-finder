import type { StepType } from "@/types"

interface HowItWorksProps {
  steps: StepType[]
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Como o JobFinder Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontrar o profissional certo para o seu projeto é fácil com nosso processo simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white rounded-full mx-auto mb-6 text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

