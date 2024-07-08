import React from 'react'
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import Services from './components/Services'

const HomePage = () => {
    return (
        <div className='w-screen'>
            <Hero />
            <LicenseProcess />
            <Services />
        </div>
    )
}

export default HomePage

