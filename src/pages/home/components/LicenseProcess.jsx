import React from 'react'
import phoneImg from "../../../assets/images/process.png"
import payment from "../../../assets/images/credit-card.png"
import fingerprint from "../../../assets/images/fingerprint.png"
import cardImg from "../../../assets/images/credit-cards.png"
import { IoMdFingerPrint } from "react-icons/io";

const LicenseProcess = () => {
    return (
        <section className='w-full p-24 flex '>
            <div className='text-[44px]/[45px] text-black font-semibold  text-center p-8 text-wrap flex flex-col items-center justify-center'>
                <em className="text-[#22C55E] ">Four simple steps</em> to get your license done
            </div>
            <div className='grid grid-cols-2 h-[600px] overflow-hidden'>

            <div className='bg-custom-dark-brown flex-1 flex p-12 items-center gap-6 bg-[#d5ffe4] rounded-lg'>
                <img src={phoneImg} className='flex-1 max-w-[150px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white text-[20px]/[28px] flex items-center justify-center'>01</p>
                <p className='font-normal text-black text-[32px]/[44px] text-wrap text-left'> Start and complete the registration form </p>
                </div>
            </div>
            <div className='bg-custom-dark-brown flex-1 flex p-12  items-center gap-6 rounded-lg'>
            <img src={payment} className='flex-1 max-w-[150px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>02</p>
                <p className='font-normal text-black text-[32px]/[44px] text-wrap text-left'> Pay for the license fee,Generate an appointment slip</p>
                </div>
            </div>
            <div className='bg-custom-dark-brown flex-1 flex p-12  items-center gap-6 rounded-lg'>
            <img src={fingerprint} className='flex-1 max-w-[150px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>03</p>
                <p className='font-normal text-black text-[32px]/[44px] text-wrap text-left'> Biometrics registration</p>
                </div>
            </div>
            <div className='bg-custom-dark-brown flex-1 flex p-12 items-center gap-6 bg-[#d5ffe4] rounded-lg'>
            <img src={cardImg} className='flex-1 max-w-[150px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>04</p>
                <p className='font-normal text-black text-[32px]/[44px] text-wrap text-left'>Done, Driver license </p>
                </div>
            </div>

        </div>
        </section>
    )
}

export default LicenseProcess
