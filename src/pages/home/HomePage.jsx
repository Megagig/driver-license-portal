import React from 'react'
import CounterDisplay from './components/CounterDisplay'
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import Services from './components/Services'


const HomePage = () => {
    return (
        <div className='relative'>
            <Hero />
            <LicenseProcess />
            <Services />
            <CounterDisplay />
            {/* <Testimonials /> */}

        </div>
    )
}

export default HomePage


