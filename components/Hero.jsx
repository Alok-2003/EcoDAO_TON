'use client'

import { useState } from 'react'
import { ChevronRight, Shield, Zap } from 'lucide-react'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      icon: <Shield className="w-24 h-24 text-primary" />,
      title: "Easy and Secure",
      description: "Cryptocurrencies provide the traceability of transactions making them a favorite."
    },
    {
      icon: <Zap className="w-24 h-24 text-primary" />,
      title: "Fast Transactions",
      description: "Experience lightning-fast crypto transactions anytime, anywhere."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-300 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="rounded-full bg-primary/10 p-4">
                {slide.icon}
              </div>
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-gray-400">{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="mt-12 space-y-4">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            onClick={nextSlide}
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
