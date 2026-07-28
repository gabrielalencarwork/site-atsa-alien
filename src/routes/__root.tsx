import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import React from 'react'
import { TopMenu } from '../components/TopMenu'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { WelcomePopup } from '../components/WelcomePopup'

export const Route = createRootRoute({
  component: () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#eef1ec] text-atsa-dark">
        <TopMenu isHome={isHome} />
        <FloatingWhatsApp />
        {isHome && <WelcomePopup />}
        
        <main className="flex-grow">
          <Outlet />
        </main>

        {!isHome && <Footer />}
      </div>
    )
  },
})
