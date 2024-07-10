import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";

const Profile = () => {
  let { state } = useLocation();
  console.log('state:', state)
  const [profileDetails, setProfileDetails] = useState({})
  useEffect(() => {
    state ? setProfileDetails(state) : null
    return () => {
      
    };
  }, [state]);
  return (
    <section className='w-screen py-20 px-16'>
        <h3 className='text-[44px]/[56px] font-bold'>Profile Details</h3>    

        <div className="w-full">
            <ProfilePicture  state={profileDetails}/>
            <BasicDetails  state={profileDetails}/>
            <LoginDetails  state={profileDetails}/>
            <InstantDriverDetails state={profileDetails} />
        </div>
    </section>
  );
}

export default Profile