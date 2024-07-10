import { FaArrowRightLong } from "react-icons/fa6";



const Services = () => {
    return (
        <section className='bg-slate-200 w-full px-6 md:px-12 py-16  md:py-20 md:px-16 flex flex-col'>
            <h3 className="text-black text-xl md:text-3xl font-medium text-center">
            Our Services
            </h3>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20 gap-10 lg:gap-8'>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/certificate-of-origin.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        New Application
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                        ✓   Apllicant must have completed driving school
                    </p>
                    <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/renewal.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                       Renew
                   </p>
                   <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/business.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                            Reissue
                        </p>
                        <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                        ✓   Applicant must be 18 years and above <br/>
                            ✓   Apllicant must have completed driving school                     
                        </p>
                        <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                            Apply now
                           <FaArrowRightLong />
                        </a>
                </div>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/edit.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        Edit Application
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                    ✓     Apllicant must have completed driving school
                    </p>                   
                     <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                       Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/print.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        Print Application Form
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div className='w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("src/assets/images/print.png")] self-center'></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] text-wrap self-center'>
                        Print Acknowledgement Slip
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓   Applicant must be 18 years and above <br/>
                    ✓    Apllicant must have completed driving school                     
                    </p>
                    <a className='t-4 text-white p-4 bg-[#22C55E] rounded-lg font-bold text-sm md:text-lg flex gap-1 border-b w-fit items-center self-center md:gap-4 cursor-pointer'>
                        Apply now
                            <FaArrowRightLong />
                    </a>
                </div>            
            </div>


        </section>
    )
}

export default Services
