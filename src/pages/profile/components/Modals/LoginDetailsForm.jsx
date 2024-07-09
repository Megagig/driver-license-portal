
import React from 'react'
import Input from '../../utils/Input'

const LoginDetailsForm = () => {
    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='w-3/5 grid p-16 bg-white'>
                <Input 
                    type="text"
                    labelName="Full Name"
                    htmlFor='fullName'
                    placeholder='Full Name'  />
                <Input 
                    type='email'
                    labelName="Email Address"
                    htmlFor='email'
                    placeholder='Email Address' />
                <Input 
                    type='text'
                    labelName="phone"
                    htmlFor='Phone Number'
                    placeholder='Phone Number'
                    inputMode="decimal" />
                <Input 
                    type='date'
                    labelName="Date of Birth"
                    htmlFor='dob'
                     />

            </form>
        </div>
    )
}

export default LoginDetailsForm
