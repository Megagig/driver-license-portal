
const Card = (props) => {
    return (
        <div className=" relative flex flex-col justify-center py-4 md:py-8 xl:px-52">
            <div className="grid grid-cols-2 bg-white py-16 gap-48">
                    <span className=" rounded-[50px] max-w-[325px] max-h-[325px]">
                        <img src={props.image} alt="image" className=" object-fit w-full h-full rounded-[50px]"/>
                    </span>
                    <div className="flex flex-col justify-start gap-10 leading-7 text-[#002334]">
                        <p className='font-medium text-base md:text-[30px]/[38px] text-wrap '>
                            {props.title}
                        </p>
                        <p className="text-lg font-normal text-wrap">{props.paragraph}</p>

                         <a href="#services" className=" w-fit bg-custom-green text-[18px]/[19.2px] text-white px-8 py-4 font-medium rounded-full min-w-36 transition-all duration-500 hover:opacity-50">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Card
