import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';
import LoginDetailsForm from './Modals/LoginDetailsForm';

const LoginDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const handleEditLoginDetails = () =>{
        setShowModal(true)
    }
    const handleCloseModal = () =>{
        setShowModal(false)
    }

    return (
        <>
        <div className='flex mt-6 p-6 relative border-4 border-custom-grey '>
            <h4 className="p-3 bg-white text-3xl font-medium absolute top-[-29px]">Login Details</h4>
            <FaEdit className="bg-white text-3xl font-medium absolute top-[-16px] right-0 cursor-pointer" onClick={handleEditLoginDetails} />
            <div className='flex flex-col'>
                <SingleDetail
                    label='Password'
                    details='Ogundeji Oluwapelumi Ayodeji' />
            </div>
        </div>
        {showModal ? <LoginDetailsForm  closeModal ={handleCloseModal}/> : null}
    </>

    )
}

export default LoginDetails
