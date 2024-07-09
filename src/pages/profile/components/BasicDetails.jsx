import React from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';

const BasicDetails = () => {
    return (
        <div className='flex mt-16 p-6 relative border-4 border-custom-grey w-full'>
        <h4 className="p-3 bg-white text-2xl font-medium absolute top-[-29px]">Basic Details</h4>
        <FaEdit className="bg-white text-3xl font-medium absolute top-[-16px] right-0 cursor-pointer"  />
        < div className='flex flex-col w-full'>
            <SingleDetail 
                label="Full Name"
                details ="Ogundeji Oluwapelumi Ayodeji" />
            <SingleDetail
                label='Email'
                details="Ogundeji Oluwapelumi Ayodeji" />
            <SingleDetail
                label="Phone Number"
                details='Ogundeji Oluwapelumi Ayodeji' />
            <SingleDetail 
                label='Date of Birth'
                details='Ogundeji Oluwapelumi Ayodeji' />
        </div>
    </div>
    
    )
}

export default BasicDetails
