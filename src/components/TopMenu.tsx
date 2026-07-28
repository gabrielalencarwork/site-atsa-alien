import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

export function TopMenu({ isHome = false }: { isHome?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Yoga', to: '/yoga' },
    { label: 'Eneagrama', to: '/eneagrama' },
    { label: 'Mentorias', to: '/mentorias' },
    { label: 'Depoimentos', to: '/depoimentos' },
    { label: 'FAQ', to: '/faq' },
  ]

  // Se estiver na Home e não rolou a página, o texto precisa ser branco para contrastar com o vídeo
  const isLightText = isHome && !isScrolled
  const textColorClass = isLightText ? 'text-white' : 'text-atsa-dark'
  const textMutedClass = isLightText ? 'text-white/80' : 'text-atsa-dark/70'

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#eef1ec]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={`font-serif text-2xl tracking-widest transition-colors ${textColorClass}`}>atsa</span>
          <span className={`text-[0.6rem] uppercase tracking-[0.2em] transition-colors ${isLightText ? 'text-white/80' : 'text-atsa-green'}`}>Polyana Lafetá</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.to}
              to={link.to} 
              className={`text-xs uppercase tracking-[0.15em] transition-colors ${textMutedClass} hover:text-atsa-green`}
              activeProps={{ className: isLightText ? 'text-white font-bold drop-shadow-md' : 'text-atsa-green font-medium' }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/agendar"
            className="bg-atsa-green text-atsa-light px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-[#3d692d] transition-colors shadow-md"
          >
            Agendar
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden transition-colors ${textColorClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#eef1ec] border-t border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-6">
          {navLinks.map(link => (
            <Link 
              key={link.to}
              to={link.to} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-atsa-dark/80 hover:text-atsa-green"
              activeProps={{ className: 'text-atsa-green font-medium' }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/agendar"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-atsa-green text-atsa-light px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center mt-2"
          >
            Agendar
          </Link>
        </div>
      )}
    </header>
  )
}
