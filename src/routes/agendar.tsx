import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/agendar')({
  component: Agendar,
})

const YogaIcon = ({ size = 28, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth={strokeWidth * 8}>
    <circle cx="100" cy="100" r="50" />
    <circle cx="100" cy="50" r="50" />
    <circle cx="100" cy="150" r="50" />
    <circle cx="143.3" cy="75" r="50" />
    <circle cx="143.3" cy="125" r="50" />
    <circle cx="56.7" cy="75" r="50" />
    <circle cx="56.7" cy="125" r="50" />
    <circle cx="100" cy="100" r="100" strokeWidth={strokeWidth * 4} />
  </svg>
)

const EneagramaIcon = ({ size = 28, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="-5 -5 210 210" fill="none" stroke="currentColor" strokeWidth={strokeWidth * 8}>
    <circle cx="100" cy="100" r="100" />
    <polygon points="100,0 186.6,150 13.4,150" />
    <polygon points="164.3,23.4 134.2,194 198.5,82.6 35.7,23.4 65.8,194 1.5,82.6" />
  </svg>
)

function Agendar() {
  const phone = '5538974008405'
  
  const msgYoga = encodeURIComponent('Olá Polyana! Gostaria de saber mais sobre as práticas e vivências de Yoga.')
  const msgEneagrama = encodeURIComponent('Olá Polyana! Gostaria de saber mais sobre as mentorias de Eneagrama.')

  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark flex items-center">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Como posso te ajudar hoje?</h1>
        <p className="font-light text-gray-600 mb-12">
          Escolha o caminho que mais ressoa com o seu momento atual para iniciarmos uma conversa.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href={`https://wa.me/${phone}?text=${msgYoga}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:border-atsa-green hover:shadow-lg transition-all group flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-atsa-green/10 text-atsa-green flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <YogaIcon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-2">Quero saber mais sobre Yoga</h3>
            <span className="text-xs uppercase tracking-widest text-gray-400 mt-auto pt-4 group-hover:text-atsa-green transition-colors">Iniciar conversa &rarr;</span>
          </a>
          
          <a 
            href={`https://wa.me/${phone}?text=${msgEneagrama}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:border-atsa-green hover:shadow-lg transition-all group flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-atsa-green/10 text-atsa-green flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <EneagramaIcon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-2">Quero saber mais sobre Eneagrama</h3>
            <span className="text-xs uppercase tracking-widest text-gray-400 mt-auto pt-4 group-hover:text-atsa-green transition-colors">Iniciar conversa &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
