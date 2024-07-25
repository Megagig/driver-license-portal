import React from 'react'

const Card = (props) => {
    return (
        <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div
                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <img src={props.img} alt="image"/>
                    </span>
                    <p className='group-hover:translate-z-28   font-semibold text-base md:text-[23px]/[26.4px] text-wrap self-center'>
                        {props.title}
                    </p>
                    <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                            online.</p>
                    </div>
                    <div className="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                                &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
