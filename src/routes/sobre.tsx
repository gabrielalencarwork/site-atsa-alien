import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/sobre')({
  component: Sobre,
})

function Sobre() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-16 text-center">Sobre a Mentora</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Foto com moldura única arredondada e animada */}
          <div className="w-full md:w-1/2 flex justify-center py-6">
             <motion.div 
               animate={{ 
                 y: [-10, 10, -10],
                 scale: [0.98, 1.02, 0.98],
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity, 
                 ease: "easeInOut" 
               }}
               className="relative rounded-full p-2 bg-atsa-green/20"
             >
               <img 
                 src="/polyana.png.png" 
                 alt="Polyana Lafetá" 
                 style={{ clipPath: 'inset(0 12% 0 0)' }}
                 className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-atsa-green/40"
               />
             </motion.div>
          </div>

          <div className="w-full md:w-1/2 space-y-8 font-light text-lg leading-relaxed text-gray-700">
            <p>
              Polyana Lafetá é guia na jornada do autoconhecimento, criando espaços onde corpo, mente e essência se reencontram.
            </p>
            <p>
              Através do yoga, do eneagrama, das vivências e das mentorias, ela apoia pessoas a cultivarem equilíbrio, clareza e transformação na vida cotidiana. O trabalho da Atsa não promete caminhos mágicos ou soluções rápidas, mas sim ferramentas consistentes de desenvolvimento humano.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
