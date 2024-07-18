
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";

const Profile = () => {

  let { state } = useLocation();
  const [profileDetails, setProfile] = useState({
      username: 'michaelw',
        password: 'michaelwpass',
        firstname: "Michael",
        surname: "Joe",
        middlename: "Doe",
        dob:"1992-12-27",
        phone:"08111206206",
        email:"ayopelumi2014@gmail.com",
        StateofAddress: "Lagos",
        lga:"ifedayo",
        address:"berger",
        gender: "Male",
        licenseId:"12344AD52DC",
        certificateNumber:"Ikj384AD34",
        nin :"557FFR2397F93983",
        joined : "21-12-3034",
        lastRenewal: "21-21-2021",
        nextRenewal: "21-21-2021",
        image: "src/assets/images/close-up-friends-traveling-by-car.jpg"
  })


  console.log({profileDetails})

  const editImage = (event) => {
          
      let reader = new FileReader();
      let file = event.target.files[0];
      console.log(event.target.files[0])
      reader.onloadend = () => {
  
        setProfile({
          ...profileDetails,
          image: reader.result,
          file: file
  
        })
      };
      reader.readAsDataURL(file);
  }
 
const updateBasicDetails = (args) => {
  setProfile({
    ...profileDetails,
    ...args
  })
};

  return (
    <section className='w-screen py-7 md:py-12 xl:py-20 px-4 md:px-10 xl:px-16 bg-white'>
        <h3 className='text-[28px]/[36px] md:text-[44px]/[56px] font-bold text-custom-green'>Profile Details</h3>    

        <div className="w-full">
            <ProfilePicture  
              state={profileDetails}
              editImage={editImage}
            />
            <BasicDetails  
              state={profileDetails}
              updateBasicDetails={updateBasicDetails}
            />
            <LoginDetails  state={profileDetails}/>
            <InstantDriverDetails state={profileDetails} />
        </div>
    </section>
  );
}

export default Profile