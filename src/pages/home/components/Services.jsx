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
        "title" : "Print Appointment Slip"
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
                   return <Card image={item.image} title={item.title} key={`service-${index}`} />
                    
                })}
   
            </div>


        </section>
    )
}

export default Services
