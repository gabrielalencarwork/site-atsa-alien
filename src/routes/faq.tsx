import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: Faq,
})

function Faq() {
  const faqs = [
    {
      pergunta: 'O que é Eneagrama?',
      resposta: 'O Eneagrama é um sistema de estudo da personalidade que descreve 9 padrões principais de como pensamos, sentimos e agimos. É um mapa para desenvolver inteligência emocional e relacional, ajudando a sair do "piloto automático".'
    },
    {
      pergunta: 'Como funcionam as mentorias?',
      resposta: 'As mentorias são encontros estruturados (individuais ou em grupo) onde trabalhamos com base no seu momento atual e no mapa do Eneagrama, com exercícios práticos e reflexões guiadas.'
    },
    {
      pergunta: 'Os atendimentos são apenas online?',
      resposta: 'As mentorias acontecem no formato online, permitindo atender pessoas de todo o Brasil. Já as vivências e retiros são eventos presenciais programados ao longo do ano.'
    },
    {
      pergunta: 'Como sei se os Retiros são para mim?',
      resposta: 'Se você busca uma pausa genuína, conexão com a natureza e ferramentas para cuidar da mente e do corpo (mesmo sem experiência prévia com yoga), os retiros são para você. É um ambiente de acolhimento e sem julgamentos.'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Perguntas Frequentes</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-md">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.pergunta}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 text-gray-400 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 font-light text-gray-600"
                  >
                    {faq.resposta}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
