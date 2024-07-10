<<<<<<< HEAD
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';
import BasicDetailsForm from './Modals/BasicDetailsForm';

const BasicDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const[profile, setProfile] = useState({})

    const handleEditBasicDetails = () => { 
        setShowModal(true)
     };
     const handleCloseModal = () =>{
        setShowModal(false)
     }
    return (
        <>
        <div className='flex mt-16 p-6 relative border-4 border-custom-grey w-full'>
        <h4 className="p-3 bg-white text-2xl font-medium absolute top-[-29px]">Basic Details</h4>
        <FaEdit className="bg-white text-3xl font-medium absolute top-[-16px] right-0 cursor-pointer" onClick={handleEditBasicDetails} />
        < div className='grid grid-cols-3 w-full'>

            <SingleDetail 
                label="Surname"
                details ="Ogundeji " />
            <SingleDetail 
                label="First Name"
                details ="Oluwapelumi" />
            <SingleDetail 
                label="Middle Name"
                details ="Ayodeji" />
            <SingleDetail
                label='Email'
                details="Oluwapelumi@gail.com" />
            <SingleDetail
                label="Phone Number"
                details='+2348111206206' />
            <SingleDetail 
                label='Date of Birth'
                details='27th December, 1987' />
            <SingleDetail 
                label='Gender'
                details='Male' />
            <SingleDetail 
                label='Home Address'
                details='161, Onipan Bus-stop, Onipan, Lagos State' />
           <SingleDetail 
                label='L.G.A'
                details='Ifedayo' />
        </div>
        </div>
        {showModal?
        <BasicDetailsForm closeModal={handleCloseModal} /> : null   }
    </>
=======
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
>>>>>>> 90754c5 (started the user profile)
    
    )
}

export default BasicDetails
