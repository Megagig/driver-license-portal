import React from 'react';
import { useNavigate } from "react-router-dom";
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


 export const AppointmentDashboard = () => {
    const navigate = useNavigate();

    const fetchAppointmentSlip = () => { 
        // fetch code here
        console.log("i am running");
      navigate('/appointment',  {state:{ ...data }} );
     };
    return (
        <section className="w-screen grid place-content-center">

             <label  className=" mt-7 flex bg-transparent border border-[#22C55E] rounded-full w-fit">
                <input  placeholder="Search by application Id" className='bg-transparent text-black px-[32px] py-[20px] border-0 outline-0'/>
                <button onClick={fetchAppointmentSlip} className="bg-[#22C55E] text-[20px]/[19.2px] font-bold text-white px-[20px] py-[8px]  rounded-full w-[190px]">Suscribe</button>
            </label>
            
            




        </section>
    )
}

