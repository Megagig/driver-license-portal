import customercare from "../../../assets/customercare.png"
import phone from "../../../assets/phone.svg"
import envelop from "../../../assets/envelop.svg"

const SupportHero = () => {
    return (
        <div className="  grid ">

            <h1 className="text-custom-green text-center md:text-start mb-8 text-3xl md:text-5xl font-bold ">Support Center</h1>

            <div className=" mb-8 grid gap-8 md:flex md:flex-row-reverse md:my-4 items-center ">
                <div className="w-full grid place-content-center">
                    <img className=" max-h-[25rem] max-w-[25rem] w-full  p-4 shadow-[5px_2px_10px_rgba(0,0,0,0.1)] rounded-full  object-contain" src={customercare} alt="" />
                </div>
                <div className="w-full">
                    <p className="md:text-base/8 text-sm text-justify">Don't hesitate to reach out to our friendly customer support team. They are happy to assist you with any questions or challenge you may encounter on this platform. you can reach out to us via the channels below</p>
                    <div className="grid gap-4 mt-6">
                        <div className="flex gap-3 items-start">
                            <img className="w-6" src={phone} alt="" />
                            <p>+234900123456</p>
                        </div>
                        <div className="flex gap-3">
                            <img className="w-6" src={envelop} alt="" />
                            <p>idl_support@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default SupportHero