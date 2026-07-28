import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/yoga')({
  component: Yoga,
})

function Yoga() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark relative overflow-hidden">
      
      {/* Yoga Background Animation - Semente da Vida (Geometria Sagrada) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] text-atsa-green pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="50" r="50" />
            <circle cx="100" cy="150" r="50" />
            <circle cx="143.3" cy="75" r="50" />
            <circle cx="143.3" cy="125" r="50" />
            <circle cx="56.7" cy="75" r="50" />
            <circle cx="56.7" cy="125" r="50" />
            {/* Círculo externo para emoldurar a semente da vida */}
            <circle cx="100" cy="100" r="100" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">A Jornada do Yoga</h1>
        
        <div className="space-y-8 font-light text-lg leading-relaxed text-gray-700">
          <p>
            O Yoga é mais do que uma prática física; é um caminho milenar de conexão entre corpo e mente. Na Atsa, utilizamos essa filosofia como base para ancorar o autoconhecimento no momento presente.
          </p>
          
          <h2 className="text-2xl font-serif mt-12 mb-6">Nossos Formatos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-medium text-xl mb-4">Workshops Online e Presenciais</h3>
              <p className="text-sm opacity-80">Mergulhos temáticos para aprofundar aspectos específicos da prática e da filosofia do yoga.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-medium text-xl mb-4">Vivências e Retiros</h3>
              <p className="text-sm opacity-80">Experiências presenciais imersivas desenhadas para desconectar da rotina e reconectar com a própria essência.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
