import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'

export const Route = createFileRoute('/jornada')({
  component: Jornada,
})

function Jornada() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "Você já sentiu que repete os mesmos padrões nos relacionamentos, mesmo sabendo que te fazem mal?",
      a: "O Eneagrama atua exatamente aí. Ele não é um teste para te colocar em uma caixa, mas um mapa compassivo que revela por que você age como age. Ele expõe a motivação inconsciente por trás das suas atitudes, dando-lhe o poder de escolha, ao invés da reação automática."
    },
    {
      q: "Preciso ter experiência prévia com Yoga ou meditação?",
      a: "Absolutamente não. As vivências não são sobre performance física ou flexibilidade. O tapete de Yoga é um laboratório para a vida: como você respira no desconforto? Como você lida com seus limites? Qualquer corpo que respira pode participar dessa investigação."
    },
    {
      q: "Como o Yoga e o Eneagrama se complementam?",
      a: "O Eneagrama traz clareza mental e mapeamento das emoções, mas apenas entender mentalmente não gera mudança profunda. O Yoga traz essa compreensão para o corpo, liberando as tensões crônicas que o nosso tipo de personalidade acumulou. É a união entre entender a mente e sentir o corpo."
    },
    {
      q: "A mentoria é como uma terapia?",
      a: "Não. A mentoria de autoconhecimento foca no desenvolvimento da sua inteligência relacional no momento presente e não substitui acompanhamento psicológico ou psiquiátrico quando necessário. É uma ferramenta de processo e expansão da consciência."
    }
  ]

  return (
    <div className="pt-32 pb-24 bg-atsa-light min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-atsa-dark mb-6">A Jornada</h1>
          <div className="w-12 h-[1px] bg-atsa-green mx-auto mb-8"></div>
          <p className="text-lg text-atsa-dark/80 font-light leading-relaxed">
            Compreendendo o percurso de transformação e autoinvestigação.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-atsa-dark/5 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif text-lg text-atsa-dark pr-8">{faq.q}</span>
                <span className={`text-atsa-green text-2xl transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-atsa-dark/70 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-atsa-dark text-atsa-light rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-atsa-green"></div>
          <h3 className="font-serif text-2xl mb-4">Lembre-se:</h3>
          <p className="font-light opacity-90 mb-8 max-w-xl mx-auto">
            O autoconhecimento não é uma linha reta, nem uma fórmula de felicidade instantânea. É um processo contínuo de voltar para casa, para a sua essência.
          </p>
          <a href="/contato" className="inline-block bg-transparent border border-atsa-light/30 hover:border-atsa-light text-atsa-light px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300">
            Estou pronto
          </a>
        </div>
      </div>
    </div>
  )
}
