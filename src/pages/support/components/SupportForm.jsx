import Button from "../../../components/utils/Button"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react"

const SupportForm = ({ BtnFunction }) => {
    const [phoneNo, setPhoneNo] = useState("")
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("you submitted a form")
    }

    const inputStyle = "w-full rounded-md border border-[#e0e0e0] py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

    return (
        <div className="md:mt-8 mt-4 pt-4 md:pt-10">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 text-sm gap-x-16 gap-y-6">

                <div >
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Application ID <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="Enter Application ID" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Driver's Licence Number <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g 01/01/2024" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="date" placeholder="e.g 01/01/2024" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Full Name <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g John Doe" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Contact Number <span className="text-red-500">*</span></label>

                    <div className={inputStyle}>
                        <PhoneInput
                            international
                            placeholder="e.g +2349009000222"
                            countryCallingCodeEditable={false}
                            defaultCountry="NG"
                            value={phoneNo}
                            onChange={setPhoneNo}

                        />

                    </div>
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Email Address <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="email" placeholder="e.g +2349009000222" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Comments <span className="text-red-500">*</span></label>
                    <textarea className={inputStyle} name="" id="" required></textarea>
                </div>

            </form>
            <div className="mt-10 grid place-content-end">
                <Button BtnFunction={BtnFunction}>
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default SupportForm