import React from 'react'
import CounterDisplay from './components/CounterDisplay'
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import Services from './components/Services'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <LicenseProcess />
            <Services />
            <CounterDisplay />
            <Testimonials />
        <Slider />
        </div>
    )
}

export default HomePage


