import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        
        <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
        </div>
        
        
    </div>
  )
}

export default App