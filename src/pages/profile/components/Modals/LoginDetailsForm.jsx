import React from 'react';
import Input from '../../utils/Input';

const LoginDetailsForm = (props) => {
    const updateBasicDetails = (event) => {
        event.preventDefault()
        props.closeModal()
      };
    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='w-2/5 grid p-8 bg-white rounded-lg' onSubmit={updateBasicDetails}>
                <h3 className='text-4xl text-custom-green mb-8'>Change Password</h3> 
                <Input 
                    type="password"
                    labelName="Old Password"
                    htmlFor='password'
                    placeholder=' Old Password' 
                    required={true} />
                <Input 
                    type="password"
                    labelName="New Password"
                    htmlFor='password'
                    placeholder='New Password' 
                    required={true} />
                <Input 
                    type='password'
                    labelName="Confirm New Password"
                    htmlFor='confirmPassword'
                    placeholder='Confirm New Password'
                    required={true} />

                     <div className="flex items-center gap-5 justify-end mt-8">
                        <button type='button' onClick={props.closeModal} className='px-8 py-4 rounded-lg text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-8 py-4 rounded-lg text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default LoginDetailsForm
