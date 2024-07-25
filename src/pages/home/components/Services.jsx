import business from "../../../assets/images/business.png";
import certificate from "../../../assets/images/certificate-of-origin.png";
import edit from "../../../assets/images/edit.png";
import print from "../../../assets/images/print.png";
import renewal from "../../../assets/images/renewal.png";
import Card from "../utils/Card";

let arrayService =[
    {
        "image": certificate,
        "title" : "New Application"
    },
    {
        "image": renewal,
        "title" : "Renew Application"
    },
    {
        "image": business,
        "title" : "Reissue Application"
    },
    {
        "image": edit,
        "title" : "Edit Application"
    },
    {
        "image": print,
        "title" : "Licence Verification"
    },
    {
        "image": print,
        "title" : "Print Acknowledgement Slip"
    }
]


const Services = () => {
    return (
        <section className='bg-[#f2f2f2] w-full px-6 md:px-8 lg:px-10 py-16  md:py-20 xl:px-16 flex flex-col'>
            <h3 className="text-[#22C55E] text-2xl md:text-4xl lg:text-7xl font-medium text-center">
            Our Services
            </h3>

            <div className='xl:px-20 grid md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20 gap-10 lg:gap-8'>

                {arrayService.map((item, index) => {
                    <Card image={item.image} title={item.title} key={`service-${index}`} />
                    
                })}

                <div className='shadow-md  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-slate-100 flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start '>
                  <div style={{backgroundImage :`url(${certificate})`}} className={`w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain bg-[url("${certificate}")] self-center`}></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        New Application
                    </p>
                    <p className='font-normal text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                        ✓   Apllicant must have completed driving school
                    </p>
                </div>
                <div className='shadow-md  border-[#F4F4F4] border-t-[#83c6f3] border-t-[16px] border bg-[#d5ffe4] flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div style={{backgroundImage :`url(${renewal})`}} className={`w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain self-center`}></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                       Renew
                   </p>
                   <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                </div>
                <div className='shadow-md  border-[#F4F4F4] border-t-[#4cffff] border-t-[16px] border bg-slate-100 md:bg-[#d5ffe4] lg:bg-slate-100 flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div style={{backgroundImage :`url(${business})`}} className={`w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain self-center`}></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                            Reissue
                        </p>
                        <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                        ✓   Applicant must be 18 years and above <br/>
                            ✓   Apllicant must have completed driving school                     
                        </p>
                </div>
                <div className='shadow-md  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#d5ffe4] md:bg-slate-100 lg:bg-[#d5ffe4] flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div style={{backgroundImage :`url(${edit})`}} className={`w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain self-center`}></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        Edit Application
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                    ✓     Apllicant must have completed driving school
                    </p>                   
                </div>
                <div className='shadow-md  border-[#F4F4F4] border-t-[#83c6f3] border-t-[16px] border bg-slate-100 flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start'>
                  <div style={{backgroundImage :`url(${print})`}} className={`w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain self-center`}></div>
                    <p className='font-semibold text-base md:text-[23px]/[26.4px] self-center'>
                        License Verification
                    </p>
                    <p className='font-normal text-black text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                </div>
                <div className='group shadow-xl hover:bg-green-400 hover:shadow-xl  hover:scale-110 hover:text-white transform-style-3d text-black  border-[#F4F4F4] border-t-[#4cffff] border-t-[16px] border bg-[#d5ffe4] flex flex-col rounded-xl p-4 md:p-10 gap-4 md:gap-7 items-start '>
                  <div style={{backgroundImage :`url(${print})`}} className={`group-hover:invert w-10 h-10 md:w-16 md:h-16 rounded-lg bg-contain self-center`}></div>
                    <p className='group-hover:translate-z-28   font-semibold text-base md:text-[23px]/[26.4px] text-wrap self-center'>
                        Print Acknowledgement Slip
                    </p>
                    <p className='font-normal text-sm md:text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓   Applicant must be 18 years and above <br/>
                    ✓    Apllicant must have completed driving school                     
                    </p>
                </div>
                <Card />      
            </div>


        </section>
    )
}

export default Services
