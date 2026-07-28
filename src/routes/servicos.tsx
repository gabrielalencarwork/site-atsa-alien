import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect } from 'react'
import { Leaf, Sun, Users, Mountain, Compass } from 'lucide-react'

export const Route = createFileRoute('/servicos')({
  component: Servicos,
})

function Servicos() {
  
  useEffect(() => {
    // Handle anchor links scroll on mount
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="pt-32 pb-24 bg-atsa-light min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-atsa-dark mb-6">Ferramentas de Despertar</h1>
          <div className="w-12 h-[1px] bg-atsa-green mx-auto mb-8"></div>
          <p className="text-lg text-atsa-dark/80 font-light leading-relaxed max-w-2xl mx-auto">
            O Yoga ancora o corpo no agora; o Eneagrama mapeia a mente. Juntos, eles nos devolvem à essência.
          </p>
        </div>

        {/* Seção Yoga */}
        <section id="yoga" className="scroll-mt-32 mb-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Leaf className="text-atsa-green stroke-[1.5]" size={32} />
            <h2 className="text-3xl font-serif text-atsa-dark">Práticas de Yoga</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-atsa-dark/5 hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl mb-4 text-atsa-dark">Vivências</h3>
              <p className="text-atsa-dark/70 font-light mb-8 line-clamp-3">
                Encontros desenhados para tirar você do automatismo. Através do movimento consciente e da respiração, criamos um espaço seguro para sentir e processar emoções presas no corpo.
              </p>
              <a href="/contato" className="text-atsa-green text-sm uppercase tracking-widest font-medium hover:text-atsa-dark transition-colors flex items-center gap-2">
                Agendar Vivência <span className="text-lg">→</span>
              </a>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-atsa-dark/5 hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl mb-4 text-atsa-dark">Retiros Presenciais</h3>
              <p className="text-atsa-dark/70 font-light mb-8 line-clamp-3">
                Imersões profundas na natureza, combinando silêncio, práticas intensivas e partilhas. Uma oportunidade de desconectar do ruído do mundo e escutar a própria voz.
              </p>
              <a href="/contato" className="text-atsa-green text-sm uppercase tracking-widest font-medium hover:text-atsa-dark transition-colors flex items-center gap-2">
                Lista de Espera <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Seção Eneagrama */}
        <section id="eneagrama" className="scroll-mt-32 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Compass className="text-atsa-accent stroke-[1.5]" size={32} />
            <h2 className="text-3xl font-serif text-atsa-dark">Sabedoria do Eneagrama</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-atsa-dark/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-atsa-accent/10 rounded-full flex items-center justify-center mb-6 text-atsa-accent">
                <Sun size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg mb-4 text-atsa-dark">Mentoria Online</h3>
              <p className="text-atsa-dark/70 font-light text-sm mb-6">
                Acompanhamento individualizado para mapear seu tipo de personalidade, compreender seus instintos e desenvolver inteligência relacional genuína.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-atsa-dark/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-atsa-accent/10 rounded-full flex items-center justify-center mb-6 text-atsa-accent">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg mb-4 text-atsa-dark">Workshops</h3>
              <p className="text-atsa-dark/70 font-light text-sm mb-6">
                Encontros em grupo focados na dinâmica dos 9 tipos e como cada um interage com o mundo. Excelente para equipes e casais buscando melhor comunicação.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-atsa-dark/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-atsa-accent/10 rounded-full flex items-center justify-center mb-6 text-atsa-accent">
                <Mountain size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg mb-4 text-atsa-dark">Eventos</h3>
              <p className="text-atsa-dark/70 font-light text-sm mb-6">
                Palestras e conduções sobre o poder do autoconhecimento aplicado à vida real, longe de teorias abstratas e perto do dia a dia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
