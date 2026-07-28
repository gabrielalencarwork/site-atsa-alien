import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verificar se já foi mostrado
    const hasSeenPopup = sessionStorage.getItem('atsa_welcome_seen')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('atsa_welcome_seen', 'true')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#fafafa] rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl border border-white"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-atsa-dark">Seu refúgio para o autoconhecimento</h2>
              <p className="font-light text-gray-600 leading-relaxed text-sm md:text-base">
                Clique nos elementos ao seu redor e descubra o caminho que mais ressoa com você — através do Yoga ou do Eneagrama.
              </p>
              
              <button 
                onClick={handleClose}
                className="bg-atsa-green text-atsa-light px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#3d692d] transition-colors mt-4 inline-block"
              >
                Entrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
