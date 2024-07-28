
const Card = (props) => {
    return (
        <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-4 md:py-8">
            <div className="h-[300px] md:h-[350px] group relative cursor-pointer overflow-hidden bg-white px-6 pt-7 pb-5 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg md:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-100 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="group-hover:h-16 group-hover:w-16 flex h-36 w-36 md:h-52 md:w-52 md:group-hover:h-28 md:group-hover:w-28 items-center justify-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-700">
                        <img src={props.image} alt="image" className="w-3/4 group-hover:w-full object-fit invert p-4 md:p-6"/>
                    </span>
                    <p className='mt-12 mb-12 md:mt-16 md:mb-24 group-hover:mb-0 group-hover:mt-4 group-hover:translate-z-28   font-semibold  text-base md:text-[23px]/[26.4px] text-wrap self-center transition-all duration-300 group-hover:text-custom-grey'>
                        {props.title}
                    </p>
                    <div className="space-y-6 pt-5 text-sm md:text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-custom-grey">
                        <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                            online.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
