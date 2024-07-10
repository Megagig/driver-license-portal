<<<<<<< HEAD
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';
import BasicDetailsForm from './Modals/BasicDetailsForm';

const BasicDetails = (props) => {
    const [showModal, setShowModal] = useState(false)
    const[profileDetails, setProfile] = useState({})
   
    const handleEditBasicDetails = () => { 
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }


    return (
        <>
        <div className='flex mt-16 p-6 relative border-4 border-custom-grey w-full'>
        <h4 className="p-3 bg-white text-2xl font-medium absolute top-[-29px]">Basic Details</h4>
        <FaEdit className="bg-white text-4xl font-medium absolute top-[-16px] right-10 cursor-pointer" onClick={handleEditBasicDetails} />
        < div className='grid grid-cols-3 w-full'>

            <SingleDetail 
                label="Surname"
                details ={props.state.surname} />
            <SingleDetail 
                label="First Name"
                details ={props.state.firstname} />
            <SingleDetail 
                label="Middle Name"
                details ={props.state.middlename} />
            <SingleDetail
                label='Email'
                details={props.state.email} />
            <SingleDetail
                label="Phone Number"
                details={props.state.phone}/>
            <SingleDetail 
                label='Date of Birth'
                details={props.state.dob} />
            <SingleDetail 
                label='Gender'
                details={props.state.gender} />
            <SingleDetail 
                label='Home Address'
                details={props.state.address} />
           <SingleDetail 
                label='L.G.A'
                details={props.state.lga}/>
          <SingleDetail 
                label='State'
                details={props.state.State}/>
        </div>
        </div>
        {showModal?
        <BasicDetailsForm 
            formData={props.state} 
            closeModal={handleCloseModal}
            editAddress={props.editAddress}
            editDob={props.editDob}
            editEmail={props.editEmail}
            editFirstName={props.editFirstName}
            editGender={props.editGender}
            editMiddleName={props.editMiddleName}
            editPhone={props.editPhone}
            editSurname={props.editSurname}
            editLga={props.editLga}
            editState={props.editState}
             /> : null   }
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
