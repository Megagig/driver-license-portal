
import React from 'react'
import { Hero } from "./components/Hero"
import Services from './components/Services'
import LicenseProcess from './components/LicenseProcess'

const HomePage = () => {
    return (
        <div className='w-screen'>
            <Hero />
            <Services />
            <LicenseProcess />
        </div>
    )
}

export default HomePage

