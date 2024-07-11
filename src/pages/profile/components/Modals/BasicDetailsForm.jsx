
import React from 'react';
import Input from '../../utils/Input';

const BasicDetailsForm = (props) => {
    const updateBasicDetails = (event) => {
        event.preventDefault()
        props.closeModal()
      };
    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='w-2/5 grid p-16 bg-white rounded-lg' onSubmit={updateBasicDetails}>
                <h3 className='text-4xl text-custom-green mb-8'>Edit Basic Details</h3> 
                <Input 
                    type="text"
                    labelName="Full Name"
                    htmlFor='fullName'
                    placeholder='Full Name' 
                    required={true} />
                <Input 
                    type='email'
                    labelName="Email Address"
                    htmlFor='email'
                    placeholder='Email Address'
                    required={true} />
                <Input 
                    type='text'
                    labelName="phone"
                    htmlFor='Phone Number'
                    placeholder='Phone Number'
                    inputMode="decimal"
                    required={true} />
                <Input 
                    type='date'
                    labelName="Date of Birth"
                    htmlFor='dob'
                    required={true}
                     />
                     <div className="flex items-center gap-5 justify-end">
                        <button type='button' onClick={props.closeModal} className='px-8 py-4 rounded-lg text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-8 py-4 rounded-lg text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default BasicDetailsForm
