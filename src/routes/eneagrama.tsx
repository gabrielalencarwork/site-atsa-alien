import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/eneagrama')({
  component: Eneagrama,
})

function Eneagrama() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark relative overflow-hidden">
      
      {/* Enneagram Background Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] text-atsa-green pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg viewBox="-5 -5 210 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="100,0 186.6,150 13.4,150" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="164.3,23.4 134.2,194 198.5,82.6 35.7,23.4 65.8,194 1.5,82.6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">O Eneagrama</h1>
        
        <div className="space-y-8 font-light text-lg leading-relaxed text-gray-700">
          <p>
            O Eneagrama é um profundo sistema de inteligência relacional e autoconhecimento. Antes de ser uma técnica, é um mapa para entender os padrões automáticos que conduzem nossas emoções, pensamentos e atitudes.
          </p>
          <p>
            Na Atsa, o Eneagrama é ensinado de forma acessível, promovendo identificação real com o seu dia a dia, para que você perceba as próprias defesas e caminhe de volta à sua essência.
          </p>
          
          <h2 className="text-2xl font-serif mt-12 mb-6">Nossos Formatos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-medium text-lg mb-3">Mentoria Individual</h3>
              <p className="text-sm opacity-80">Um processo focado e exclusivo (online) para explorar o seu padrão e desafios específicos.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-medium text-lg mb-3">Mentoria em Grupo</h3>
              <p className="text-sm opacity-80">Jornadas coletivas onde o aprendizado se expande através das trocas e da observação dos outros perfis.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-medium text-lg mb-3">Workshops</h3>
              <p className="text-sm opacity-80">Eventos de curta duração para introdução ou aprofundamento em dinâmicas do Eneagrama.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
