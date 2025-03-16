import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SecurityTips from './components/SecurityTips'
import TryItNow from './components/TryItNow'
import CallToAction from './components/CallToAction'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SecurityTips />
        <TryItNow />
        <CallToAction />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
