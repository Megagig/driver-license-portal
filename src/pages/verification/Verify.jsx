import StepBox from "./components/StepBox"
import handcard from "../../assets/hand-card.webp"




const Verify = () => {
    return (
        <div className="p-4 md:px-20 h-full md:py-16 ">
            <div >

                <div className="grid gap-10 items-center justify-center md:flex">
                    <div className="w-full">
                        <h1 className=" text-3xl md:text-5xl text-custom-green font-bold mb-8 md:mb-16">Verify License</h1>

                        <p className="text-justify">Securely verify your identity or someone else's with our driver's license verification service. This quick and easy process uses secure technology to protect your information. Get started today and streamline your verification needs.</p>

                        <div className="mt-10">
                            <label className="mb-[2px] block text-base font-medium text-neutral-700">License ID <span className="text-red-500">*</span></label>
                            <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" placeholder="Enter License ID to be verified" />
                        </div>
                    </div>

                    <div className="w-full">
                        <img className="w-full" src={handcard} alt="" />
                    </div>


                </div>


                <div className="w-full mt-10 p-3 md:p-8">
                    <h2 className="text-3xl text-custom-green font-bold mb-2">How it Works</h2>
                    <p >Get Started with your verification requset following the simple guidelines below:</p>

                    <div className="grid  md:grid-cols-2 gap-8 mt-14 ">
                        <StepBox
                            head={<>Get Started</>}
                            message={"Click on the get input field above to begin your verification process"}
                            count={"1"}
                        />
                        <StepBox
                            head={<>Fill Verification  Form</>}
                            message={"Kindly input your verification ID correctly for accurate verification"}
                            count={"2"}
                        />

                        <StepBox
                            head={<>Secure Verifcation</>}
                            message={"Our system securely check those details against official records to confirm your license is valid in real-time"}
                            count={"3"}
                        />
                        <StepBox
                            head={"Instant Results"}
                            message={"You should recieve a clear and concise response with seconds stating the validity of your license"}
                            count={"4"}
                        />

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Verify