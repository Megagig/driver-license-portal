import React from 'react';
import { FaEdit } from "react-icons/fa";

const BasicDetails = () => {
    return (
        <div className='flex mt-16 p-6 relative border-4 border-custom-grey'>
        <h4 className=" bg-white text-2xl font-medium absolute top-[-16px]">Basic Details</h4>
        <div className='flex flex-col'>
            <div className="flex p-6 items-center gap-6">
                <span className="flex-1 text-lg font-normal">
                    Full Name
                </span>
                <p className="text-lg font-normal border-4 border-custom-grey p-4 flex-auto mr-6">
                    Ogundeji Oluwapelumi Ayodeji
                </p>
                <FaEdit className="text-2xl" />
            </div>
            <div className="flex p-6 items-center gap-6">
                <span className="flex-1 text-lg font-normal">
                    Email
                </span>
                <p className="text-lg font-normal border-4 border-custom-grey p-4 flex-auto mr-6">
                    Ogundeji Oluwapelumi Ayodeji
                </p>
                <FaEdit className="text-2xl"  />
            </div>
            <div className="flex p-6 items-center gap-6">
                <span className=" flex-1 text-lg font-normal">
                    Phone Number
                </span>
                <p className="text-lg font-normal border-4 border-custom-grey p-4 flex-auto mr-6">
                    Ogundeji Oluwapelumi Ayodeji
                </p>
                <FaEdit className="text-2xl" />
            </div>
            <div className="flex p-6 items-center gap-6">
                <span className="flex-1 text-lg font-normal">
                    Date of Birth
                </span>
                <p className="text-lg font-normal border-4 border-custom-grey p-4 flex-auto mr-6">
                    Ogundeji Oluwapelumi Ayodeji
                </p>
                <FaEdit className="text-2xl" />
            </div>
        </div>
    </div>
    
    )
}

export default BasicDetails
