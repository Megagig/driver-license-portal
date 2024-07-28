import React from 'react';
import { redirect, useNavigate } from "react-router-dom";
import appointmentSlip from "../../assets/appointment-slip.svg";
const data = 
    {
        username: 'michaelw',
        password: 'michaelwpass',
        firstname: "Michael",
        surname: "Joe",
        middlename: "Doe",
        dob:"1992-12-27",
        phone:"+2348111206206",
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
        image: "https://github.com/Megagig/driver-license-portal/blob/13ac1e81aa634480f412b95d9c5a4e17c5007917/src/assets/images/close-up-friends-traveling-by-car.jpg",
        application:[
            {
                applicationType: "new application",
                applicationDate: "2024-12-2",
                applicationTime: "10:00am",
                amount :"#40300",
                applicationId :"QWSERT-12345-12GH9",
            },
            {
                applicationType: "new application",
                applicationDate: "2024-12-2",
                applicationTime: "10:00am",
                amount :"#40300",
                applicationId :"QWSERT-12345-12GH9",
            },
            {
                applicationType: "renewal",
                applicationDate: "2023-6-21",
                applicationTime: "13:00am",
                amount :"#48300",
                applicationId :"FRIST-17655-12GH9",
            },
            {
                applicationType: "reissue",
                applicationDate: "2024-2-24",
                applicationTime: "10:00am",
                amount :"#60300",
                applicationId :"KKDIWT-12345-12GH9",
            },
            {
                applicationType: "renewal",
                applicationDate: "2022-12-12",
                applicationTime: "9:00am",
                amount :"#40300",
                applicationId :"QJKDRT-12345-12GH9",
            },
            {
                applicationType: "reissue",
                applicationDate: "2022-12-22",
                applicationTime: "15:00",
                amount :"#49300",
                applicationId :"KIDERT-12345-12GH9",
            },
            {
                applicationType: "renewal",
                applicationDate: "2014-12-2",
                applicationTime: "14:00",
                amount :"#40,300",
                applicationId :"QFREIU-12345-12GH9",
            }
        ],
    }

    
export const appointmentDashboardLoader = async ({request}) => {
    const user = JSON.parse(sessionStorage.getItem("auth")) || false;
    const pathname = new URL(request.url).pathname;
    if(user){
        return user
    } 
    else{
        throw redirect(`/login?message=Please login to continue&redirectTo= ${pathname}`);
    }
}


 export const AppointmentDashboard = () => {
    const navigate = useNavigate();
    
    const fetchAppointmentSlip = () => { 
        // fetch code here
        console.log("i am running");
      navigate('/appointment');
     };
    return (
        <section className="w-screen grid md:grid-cols-2 gap-2 md:gap-6 p-6 md:p-10 xl:p-16 xl:p-20 md:pr-0 xl:pr-0">
            <div className='flex flex-col gap-6 pt-15 md:justify-center'>
                <h3 className="text-custom-green text-2xl md:text-3xl lg:text-5xl font-medium text-left">Search your appointment slip</h3>
                <p className="text-justify mb-6 ">Securely get your and reprint your slip through this service. This quick and easy process uses secure technology to protect your information. Get started by entering your <em>appointment Id</em>, search and print to get your appointment slip.</p>
           <label>
            <h4 className='mb-2 text-custom-green text-xl md:text-2xl lg:text-3xl font-medium text-left'>Appointment Id</h4>
             <label  className=" mt-3 flex flex-col md:flex-row gap-3 md:gap-0 bg-transparent md:border md:border-[#22C55E] rounded-full w-fit">
                <input  placeholder="Search by application Id" className='bg-transparent text-black py-3 px-7 md:px-12 rounded-xl md:rounded-none md:px-[32px] md:py-[20px] border-2 border-customr-grey md:border-0 outline-0'/>
                <button onClick={fetchAppointmentSlip} className="bg-custom-green text-[20px]/[19.2px] font-bold text-white  h-[inherit] px-7 md:px-12 py-6  rounded-full">Search</button>
            </label>
           </label>
            </div>
            
            <img src={appointmentSlip}  className=" md:pl-10 runded-lg max-h-[600px] max-w-[600px]  object-fit bg-cover"/>




        </section>
    )
}

