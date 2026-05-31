import { useState } from 'react'

import './App.css'
import Hero from './sections/Hero/Hero'
import Solutions from './Solutions/Solutions'
import CoreBanking from './sections/CoreBanking/CoreBanking'
import CoreBankingFeatures from './sections/CoreBankingFeatures/CoreBankingFeatures'
import PaperlessCTA from './sections/PaperlessCTA/PaperlessCTA'
import DigitalBanking from './sections/DigitalBanking/DigitalBanking'
import InsightsSection from './sections/InsightsSection/InsightsSection'
import CaseStudies from './sections/CaseStudies/CaseStudies'
import CTABanner from './sections/CTABanner/CTABanner'
import Footer from './sections/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Solutions/>
      <CoreBanking/>
      <CoreBankingFeatures/>
      <PaperlessCTA/>
      <DigitalBanking/>
      <InsightsSection/>
      <CaseStudies/>
      <CTABanner/>
      
      <Footer/>
    </>
  )
}

export default App
