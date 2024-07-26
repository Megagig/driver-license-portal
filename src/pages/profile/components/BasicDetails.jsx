
import { useState } from 'react';
import Button from '../utils/Button';
import SingleDetail from '../utils/SingleDetail';
import BasicDetailsForm from './Modals/BasicDetailsForm';

const BasicDetails = (props) => {
    const [showModal, setShowModal] = useState(false)
   
    const handleEditBasicDetails = () => { 
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }


    return (
        <>
        <div className='flex mt-7 md:mt-16 md:p-4 relative border-2 border-custom-grey w-full'>
        <h4 className="p-3 bg-white text-lg md:text-2xl font-medium absolute top-[-29px]">Basic Details</h4>
        <Button handleEditForm = {handleEditBasicDetails} />
        < div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full'>

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
                details={props.state.lga} />
          <SingleDetail 
                label='State'
                details={props.state.StateofAddress} />
        </div>
        </div>
        {showModal?
        <BasicDetailsForm 
            formData={props.state} 
            closeModal={handleCloseModal}
            updateBasicDetails={props.updateBasicDetails}
             /> : null   }
    </>   
    )
}

export default BasicDetails
