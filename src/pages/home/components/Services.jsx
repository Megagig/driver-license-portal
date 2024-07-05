import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    return (
        <section className='bg-white w-full  py-20 px-24 flex flex-col'>
            <h3 className="text-text-custom-black text-[56px]/[67.2px] font-medium text-center">
            Our Services
            </h3>

            <div className='flex mt-20 justify-between flex-wrap self-center gap-7'>
                <div className='border-[#F4F4F4] border bg-[#fdf8f1] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <p className='font-semibold text-[29px]/[26.4px]'>
                        New Application
                    </p>
                <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                ✓  Applicant must be 18 years and above <br/>
                    ✓   Apllicant must have completed driving school
                </p>
                <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                       Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#f0f9ff] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <p className='font-semibold text-[29px]/[26.4px]'>
                        Renew
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#f5fbfb] flex flex-col rounded-xl p-10 gap-7 items-start'>
                <p className='font-semibold text-[29px]/[26.4px]'>
                    Reissue
                </p>
                <p className='font-normal text-black text-[17px]/[22px] text-wrap text-left flex-1'>
                ✓   Applicant must be 18 years and above <br/>
                    ✓   Apllicant must have completed driving school                     
                </p>
                <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                       Apply now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#fdf8ff] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <p className='font-semibold text-[29px]/[26.4px]'>
                        Edit Application
                    </p>
                <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                ✓  Applicant must be 18 years and above <br/>
                ✓     Apllicant must have completed driving school
                </p>
                <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                       Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#f0f9fb] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <p className='font-semibold text-[29px]/[26.4px]'>
                        Print Application Form
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#f5fbf1] flex flex-col rounded-xl p-10 gap-7 items-start'>
                <p className='font-semibold text-[29px]/[26.4px]'>
                    Print Acknowledgement Slip
                </p>
                <p className='font-normal text-black text-[17px]/[22px] text-wrap text-left flex-1'>
                ✓   Applicant must be 18 years and above <br/>
                ✓    Apllicant must have completed driving school                     
                </p>
                <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                       Apply now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border bg-[#f0f9ff] flex flex-col rounded-xl p-10 gap-9 items-start'>
                <p className='font-semibold text-[29px]/[26.4px]'>
                    Track Application Status
                </p>
                <p className='font-normal text-black text-[17px]/[22px] text-wrap text-left flex-1'>
                ✓  Applicant must be 18 years and above <br/>
                ✓     Apllicant must have completed driving school                     
                </p>
                <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center'>
                       Apply now
                        <FaArrowRightLong />
                    </a>
                </div>
                
            </div>


        </section>
    )
}

export default Services
