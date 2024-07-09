<<<<<<< HEAD

import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";

const Profile = () => {
  return (
    <section className='w-screen p-32'>
        <h3 className='text-[44px]/[56px] font-bold'>Profile Details</h3>    

        <div className="w-3/4">
            <ProfilePicture />
            <BasicDetails />
            <LoginDetails />
            <InstantDriverDetails />
        </div>
    </section>
  )
}

export default Profile