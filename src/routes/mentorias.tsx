import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/mentorias')({
  component: Mentorias,
})

function Mentorias() {
  const servicos = [
    {
      titulo: 'Mentoria Eneagrama Individual',
      descricao: 'Atendimento online focado nas suas questões pessoais, utilizando o mapa do Eneagrama para gerar clareza.',
    },
    {
      titulo: 'Mentoria Eneagrama em Grupo',
      descricao: 'Um espaço de troca e evolução coletiva online, aprendendo com as vivências de diferentes perfis.',
    },
    {
      titulo: 'Workshops Yoga + Eneagrama',
      descricao: 'Encontros online ou presenciais que unem o trabalho corporal à sabedoria do Eneagrama.',
    },
    {
      titulo: 'Eventos, Vivências e Retiros',
      descricao: 'Imersões presenciais desenhadas para pausar, respirar e integrar as ferramentas na prática.',
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Mentorias & Serviços</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {servicos.map((servico, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col h-full">
              <h3 className="font-serif text-2xl mb-4">{servico.titulo}</h3>
              <p className="font-light text-gray-600 mb-8 flex-grow">{servico.descricao}</p>
              <a 
                href="/agendar"
                className="inline-block text-xs uppercase tracking-widest font-medium text-atsa-green hover:text-[#3d692d] transition-colors"
              >
                Saber mais &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
