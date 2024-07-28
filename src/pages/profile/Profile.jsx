import { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { fetchProfile } from "./api";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";



export const profileLoader = ({request}) => {
  const auth = JSON.parse(sessionStorage.getItem("auth"));
  console.log({auth})
  const pathname = new URL(request.url).pathname;

  if(auth){
    let response= fetchProfile(auth.access,pathname)

    console.log({response})
    return response
  } 
  else{
      throw redirect(`/login?message=Please-login-to-continue&redirectTo= ${pathname}`);
  }
}

const Profile = () => {

  let  state  = useLoaderData();

  console.log({state})
  const [profileDetails, setProfile] = useState({...state})


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