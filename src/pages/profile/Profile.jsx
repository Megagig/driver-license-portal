import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";

const Profile = () => {
  let { state } = useLocation();
  console.log('state:', state)
  const [profileDetails, setProfile] = useState({})
  useEffect(() => {
    state ? setProfile(state) : null
    return () => {
      
    };
  }, [state]);
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
      setProfile({
          ...profileDetails,
          phone:args
      })
  };
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
            State:args
  })
  };
  const editLga = (args) => { 
    setProfile({
        ...profileDetails,
        lga:args
})
};

  return (
    <section className='w-screen py-20 px-16'>
        <h3 className='text-[44px]/[56px] font-bold'>Profile Details</h3>    

        <div className="w-full">
            <ProfilePicture  state={profileDetails}/>
            <BasicDetails  
              state={profileDetails}
              editAddress={editAddress}
              editDob={editDob}
              editEmail={editEmail}
              editFirstName={editFirstName}
              editGender={editGender}
              editMiddleName={editMiddleName}
              editPhone={editPhone}
              editSurname={editSurname}
              editLga={editLga}
              editState={editState}
            />
            <LoginDetails  state={profileDetails}/>
            <InstantDriverDetails state={profileDetails} />
        </div>
    </section>
  );
}

export default Profile