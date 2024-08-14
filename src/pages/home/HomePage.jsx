import React from 'react'
import BookAppointment from './components/BookAppointment'
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
            {/* <NewsLetter /> */}
            {/* <Testimonials /> */}
            <BookAppointment />

        </div>
    )
}

export default HomePage


