import React from 'react';
import { FaEdit } from "react-icons/fa";

const LoginDetails = () => {
    return (
        <div className='flex mt-6 p-6 relative border-4 border-custom-grey '>
        <h4 className=" bg-white text-lg font-medium absolute top-[-16px]">Login Details</h4>
        <div className='flex flex-col'>
            <div>
                <span>
                    Password
                </span>
                <p>
                    Ogundeji Oluwapelumi Ayodeji
                </p>
                <FaEdit />
            </div>
        </div>
    </div>
    )
}

export default LoginDetails
