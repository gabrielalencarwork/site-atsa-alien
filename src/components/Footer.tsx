import React from 'react'

export function Footer() {
  return (
    <footer className="bg-atsa-dark text-atsa-light py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-sm font-light opacity-80">
          <div>
            <span className="font-serif text-2xl tracking-widest block mb-2 opacity-100">atsa</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-atsa-green opacity-100 mb-6 block">Polyana Lafetá</span>
            <p className="leading-relaxed">
              Autoconhecimento através do Yoga e do Eneagrama. Um espaço de mentoria e desenvolvimento pessoal.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-6">Contato</h4>
            <div className="space-y-3">
              <p>WhatsApp: (38) 97400-8405</p>
              <p>Email: contato@atsayoga.com.br</p>
              <a href="https://instagram.com/atsayoga" target="_blank" rel="noreferrer" className="hover:text-atsa-green transition-colors">
                Instagram: @atsayoga
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-6">Links Rápidos</h4>
            <div className="flex flex-col space-y-3">
              <a href="/yoga" className="hover:text-atsa-green transition-colors">Sobre Yoga</a>
              <a href="/eneagrama" className="hover:text-atsa-green transition-colors">Sobre Eneagrama</a>
              <a href="/mentorias" className="hover:text-atsa-green transition-colors">Mentorias & Serviços</a>
              <a href="/agendar" className="hover:text-atsa-green transition-colors">Agendar Sessão</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs opacity-60">
          <p>© {new Date().getFullYear()} Atsa por Polyana Lafetá. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Criado por</span>
            <a href="https://agenciaalien.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <img src="/alien.png" alt="Alien" className="w-4 h-4 object-contain opacity-90" />
              <span className="font-medium">Alien Marketing Inteligente</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
