import React from 'react'
import { Hero } from "./components/Hero"
import Services from './components/Services'
const HomePage = () => {
    return (
        <div className='w-screen'>
            <Hero />
            <Services />
        </div>
    )
}

export default HomePage
