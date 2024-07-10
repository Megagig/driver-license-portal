import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';
import LoginDetailsForm from './Modals/LoginDetailsForm';

const LoginDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    let password = "oluwapumi"
    const handleEditLoginDetails = () =>{
        setShowModal(true)
    }
    const handleCloseModal = () =>{
        setShowModal(false)
    }
    const handleShowPassword = () => { 
        setShowPassword(!showPassword)
     };
     let queryString = password.replace(/[a-zA-Z0-9]/g,"*");
     console.log(queryString)

    return (
        <>
        <div className='flex mt-10 p-6 relative border-4 border-custom-grey '>
            <h4 className="p-3 bg-white text-3xl font-medium absolute top-[-29px]">Login Details</h4>
            <FaEdit className="bg-white text-4xl font-medium absolute top-[-16px] right-10 cursor-pointer" onClick={handleEditLoginDetails} />
            <div className='flex w-full items-center'>
                <SingleDetail
                    label='Password'
                    details={showPassword ? password : queryString} />
                    {showPassword ? <BsEye className='flex-auto w-1/5 text-4xl' onClick={handleShowPassword}/>: <BsEyeSlash className='flex-auto w-1/5 text-4xl' onClick={handleShowPassword} />}
            </div>
        </div>
        {showModal ? <LoginDetailsForm oldpassword={password} closeModal ={handleCloseModal}/> : null}
    </>
    )
}

export default LoginDetails
