import React from 'react'
import greenBg from "../../../assets/images/green-bg.png"
import outlineBg from "../../../assets/images/green-outline.png"

const NewsLetter = () => {
    return (
        <div className='bg-white relative p-20 w-full'>
            <div className="lg:left-[275px] lg:top-0 z-20 bg-white grid px-10 py-5 rounded-l-[50px] rounded-b-[50px] absolute shadow-md max-w-[890px]">
                <h5 className="text-2xl text-[#093A51] tracking-widest font-semibold">NEWSLETTER</h5>
                <span className="mt-5 text-lg text-[#093A51] font-semibold">No Spammy Sales – Only Insights</span>
                <p className="mt-2 text-base font-light text-[#093A51]">Stay Industry-connected with our monthly newsletter written by our editorial team.</p>
                <input className=" mt-5 border border-[#B1BED8] max-w-[560px] bg-white p-4 text-[#838383] text-xlrounded-md" />
                <button className=" mt-8 bg-[#15803D] text-white rounded-md px-7 py-3 w-fit">Join</button>


                <img src={outlineBg} alt="image" className='absolute bottom-0 right-20'/>
                <img src={greenBg} alt="image" className='absolute top-0 right-0'/>
            </div>


            
        </div>
    )
}

export default NewsLetter
