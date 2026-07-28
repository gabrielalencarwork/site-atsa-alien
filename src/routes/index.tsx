import { createFileRoute, Link } from '@tanstack/react-router'
import React from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fafafa] flex items-center justify-center">
      
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero_video.mp4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Escuro para destacar os textos */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Botões Direcionados Principais (Yoga e Eneagrama) */}
      <div className="absolute bottom-28 sm:bottom-16 left-0 right-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6">
        <p className="text-white/90 text-xs text-center tracking-[0.2em] uppercase mb-6 drop-shadow-md">Qual jornada você deseja seguir?</p>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 pointer-events-auto">
          <Link 
            to="/yoga" 
            className="w-full sm:w-auto text-center px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium tracking-wide hover:bg-atsa-green hover:border-atsa-green transition-all duration-300 shadow-lg"
          >
            Práticas de Yoga
          </Link>
          <Link 
            to="/eneagrama" 
            className="w-full sm:w-auto text-center px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium tracking-wide hover:bg-atsa-green hover:border-atsa-green transition-all duration-300 shadow-lg"
          >
            Descubra o Eneagrama
          </Link>
        </div>
      </div>

    </div>
  )
}
