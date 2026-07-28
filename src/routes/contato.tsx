import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { Mail, Phone } from 'lucide-react'

export const Route = createFileRoute('/contato')({
  component: Contato,
})

function Contato() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-atsa-dark flex items-center">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Entre em Contato</h1>
        <p className="font-light text-gray-600 mb-12">
          Ficou com alguma dúvida ou deseja conversar sobre parcerias? Estamos à disposição.
        </p>
        
        <div className="space-y-6">
          <a 
            href="https://wa.me/5538974008405"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center gap-4 hover:border-atsa-green transition-colors"
          >
            <Phone className="text-atsa-green" />
            <span className="font-medium">WhatsApp: (38) 97400-8405</span>
          </a>

          <a 
            href="https://instagram.com/atsayoga"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center gap-4 hover:border-atsa-green transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-atsa-green"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="font-medium">Instagram: @atsayoga</span>
          </a>

          <a 
            href="mailto:contato@atsayoga.com.br"
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center gap-4 hover:border-atsa-green transition-colors"
          >
            <Mail className="text-atsa-green" />
            <span className="font-medium">E-mail: contato@atsayoga.com.br</span>
          </a>
        </div>
      </div>
    </div>
  )
}
