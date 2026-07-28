import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/depoimentos')({
  component: Depoimentos,
})

function Depoimentos() {
  const depoimentos = [
    {
      texto: 'O processo de mentoria com a Polyana foi um divisor de águas. Consegui entender por que eu repetia os mesmos padrões no trabalho.',
      nome: 'Mariana S.',
    },
    {
      texto: 'As vivências de yoga trouxeram uma clareza mental que eu não experimentava há anos. Um espaço de muita acolhida e verdade.',
      nome: 'Rafael T.',
    },
    {
      texto: 'A união do Eneagrama com o trabalho corporal foi essencial para que eu saísse apenas do mental e começasse a sentir as mudanças.',
      nome: 'Camila L.',
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-16 text-center">Histórias que nos movem</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((dep, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="text-atsa-green mb-6 text-4xl font-serif">"</div>
              <p className="font-light text-gray-600 mb-8 italic">"{dep.texto}"</p>
              <p className="font-medium text-sm tracking-wide">— {dep.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
