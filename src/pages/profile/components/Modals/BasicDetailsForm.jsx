

import NaijaStates from "naija-state-local-government";
import React, { useEffect, useState } from 'react';
import Gender from "../../utils/Gender";
import Input from "../../utils/Input";
import Select from "../../utils/Select";


const BasicDetailsForm = (props) => {
    const [stateDropdown, setDropdown] = useState(false)
    const [state, setState] = useState()
    const [lgaDropdown, setLgaDropdown] = useState(false)
    const [profileDetails, setProfile] = useState(props.formData)
  
  
    console.log({profileDetails})
  
    const editFirstName = (args) => {
      setProfile({
          ...profileDetails,
          firstname:args
      })
    };
    const editMiddleName = (args) => { 
        setProfile({
            ...profileDetails,
            middlename:args
        })
    };
    const editSurname = (args) => { 
        setProfile({
            ...profileDetails,
            surname:args
        })
    };
    const editEmail = (args) => {
        setProfile({
            ...profileDetails,
            email:args
        })
      };
    const editGender = (args) => { 
        setProfile({
            ...profileDetails,
            gender:args
        })
    };
    const editAddress = (args) => { 
        setProfile({
            ...profileDetails,
            address:args
        })
    };
    const editPhone = (args) => { 
      console.log({profileDetails})
          const regExp = /^\d+$/;
          let value = args
      if (args.length<12){
        if (value ==="" || regExp.test(value)) {
          setProfile({
              ...profileDetails,
              phone:args
          })
        }
      }
    }
  
    const editDob = (args) => { 
        setProfile({
            ...profileDetails,
            dob:args
        })
    }
    const editState = (args) => { 
      console.log(args)
      setProfile({
              ...profileDetails,
              StateofAddress:args
      })
    };
    const editLga = (args) => { 
      setProfile({
          ...profileDetails,
          lga:args
      })
    };

  
  const updateBasicDetails = (event) => {
    event.preventDefault()
    console.log({profileDetails})
    const isEmpty = Object.values(profileDetails).some(x =>  (x == null || x == '' || x== undefined));
    console.log({isEmpty})
    if(isEmpty ==  false){
      //axios code to push
      props.updateBasicDetails(profileDetails)
      props.closeModal()
    }
  };
  

    const handleChangeDropdown = (args) => {
        setDropdown(!stateDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            console.log('i am in the if statement')
            setState(args)
            editState(args)
            if (args != profileDetails.StateofAddress) {
                editLga()
                
            }
            console.log(NaijaStates.lgas(args))
        }
      };
      useEffect(()=>{
        typeof state == "string" ? editState(state) : null
      },[state])
      const handleLgaChangeDropdown = (args) => {
        setLgaDropdown(!lgaDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            editLga(args)
        }
      };


      console.log(state)

    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='relative w-10/12 md:w-3/4 lg:w-3/5 grid p-4 md:p-8 bg-white rounded-lg h-4/5 md:h-5/6 lg:h-3/4 overflow-scroll overflow-x-hidden' onSubmit={updateBasicDetails}>
                <h3 className='sticky md:relative w-fit text-xl md:text-2xl lg:text-4xl text-custom-green mb-8'>Edit Basic Details</h3> 
                <div className='grid md:grid-cols-2 gap-1 md:gap-3'>
                <Input 
                    type="text"
                    labelName="First Name"
                    htmlFor='firstName'
                    placeholder='First Name'
                    value={profileDetails.firstname}
                    onChange={editFirstName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Middle Name"
                    htmlFor='middleName'
                    placeholder='Middle Name' 
                    value={profileDetails.middlename}
                    onChange={editMiddleName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Surname"
                    htmlFor='surname'
                    placeholder='Surname' 
                    value={profileDetails.surname}
                    onChange={editSurname}
                    required={true} />
                <Input 
                    type='email'
                    labelName="Email Address"
                    htmlFor='email'
                    placeholder='Email Address'
                    value={profileDetails.email}
                    onChange={editEmail}
                    required={true} />
                <Input 
                    type='text'
                    labelName="phone"
                    htmlFor='Phone Number'
                    placeholder='Phone Number'
                    inputMode="decimal"
                    value={profileDetails.phone}
                    onChange={editPhone}
                    required={true} />
                <Gender 
                    value={profileDetails.gender}
                    onChange={editGender}
                 />
                <Input 
                    type='text'
                    labelName="Home Address"
                    htmlFor='address'
                    placeholder='Home Address'
                    value={profileDetails.address}
                    onChange={editAddress}
                    required={true} />
                <Input 
                    type='date'
                    labelName="Date of Birth"
                    htmlFor='dob'
                    value={profileDetails.dob}
                    onChange={editDob}
                    required={true}
                     />
                     <label className='relative grid gap-2 w-full mb-6' onClick={handleChangeDropdown}>
                        <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>State</span>
                        {stateDropdown ?
                        <Select closeModal={handleChangeDropdown} value="state"/>:
                        <button type="button" className="w-full h-full py-2 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{profileDetails.StateofAddress ? profileDetails.StateofAddress :"Select a state"}</button>

                        }
                     </label>
                     <label className='relative grid gap-2 w-full mb-6' onClick={handleLgaChangeDropdown}>
                        <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>L.G.A</span>                       
                        {lgaDropdown && profileDetails.StateofAddress && stateDropdown == false?
                        <Select closeModal={handleLgaChangeDropdown} value={profileDetails.StateofAddress}/>:
                        <button type="button" className="w-full h-full py-2 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{profileDetails.lga != undefined ? profileDetails.lga : profileDetails.StateofAddress ? "Select your LGA" : "Select a state"}</button>

                        }

                     </label>
                    </div>
                     <div className=" bg-white sticky bottom-[-24px] flex items-center gap-5 justify-end py-4">
                        <button type='button' onClick={props.closeModal} className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default BasicDetailsForm
