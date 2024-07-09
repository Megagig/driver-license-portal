import React from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';

const LoginDetails = () => {
    return (
        <div className='flex mt-6 p-6 relative border-4 border-custom-grey '>
        <h4 className="p-3 bg-white text-3xl font-medium absolute top-[-29px]">Login Details</h4>
        <FaEdit className="bg-white text-3xl font-medium absolute top-[-16px] right-0 cursor-pointer"  />
        <div className='flex flex-col'>
            <SingleDetail
                label='Password'
                details='Ogundeji Oluwapelumi Ayodeji' />
        </div>
    </div>
    )
}

export default LoginDetails
