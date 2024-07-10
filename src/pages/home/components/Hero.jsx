import { useEffect, useState } from 'react';
import img from "../../../assets/images/img2.jpg";
import img2 from "../../../assets/images/img5.jpg";
import img1 from "../../../assets/images/img6.jpg";
import img4 from "../../../assets/images/img8.jpg";
import img5 from "../../../assets/images/img9.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {

  let imgArray =[img, img1, img2,img4,img5]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let interval=  setInterval(() => {
      index ==2 ? setIndex(0) : setIndex(index+1);
    }, 10000)
    return () => {
      clearInterval(interval)
    };
  }, [index]);
  // bg-[url("src/assets/images/img7.jpg")]
  return (
    <section className="flex flex-1 bg-white w-full h-screen">
      <aside className='flex bg-white p-9 md:pl-16 lg:pl-28 bg-bottom justify-center flex-1 flex-col md:bg-none bg-[url("src/assets/images/img7.jpg")]'>
        <span className="text-black w-full md:w-3/4 md:text-[32px]/[38.4px] font-normal text-wrap text-lg text-left">
          <h3 className="md:text-[64px]/[81.1px] text-2xl font-semibold text-pretty mb-9">
             Driver's lincense Application
          </h3>
          Get your Driver license done anywhere in the world <em className="text-[#22C55E] ">in an instant</em>
        </span>
        <div className="flex mt-8 items-center gap-7">

        <button className=" bg-[#22C55E] text-[18px]/[19.2px] text-white px-8 py-6 font-medium rounded-full w-fit">Get Started</button>
        <Link to='profile' state={{
          firstname: "Ogundeji",
          surname: "Ogundeji",
          middlename: "Ayodeji",
          dob:"1992-12-27",
          phone:"+2348111206206",
          email:"ayopelumi2014@gmail.com",
          State: "Lagos",
          lga:"ifedayo",
          address:"berger",
          gender: "Male",
          licenseId:"12344AD52DC",
          certificateNumber:"Ikj384AD34",
          nin :"557FFR2397F93983",
          joined : "21-12-3034",
          lastRenewal: "21-21-2021",
          nextRenewal: "21-21-2021",
        }} className=" text-[#22C55E] border border-[#22C55E] text-[18px]/[19.2px] bg-white px-8 py-6 font-medium rounded-full w-fit"> Application</Link>
        </div>

      </aside>
      <aside className=" hidden md:flex md:flex-1 md:h-full ">
          <img src={imgArray[index]} className='object-cover w-full h-full' alt="image" />
      </aside>

    </section>
  );
};
