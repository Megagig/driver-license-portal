import { useEffect, useState } from 'react';
import img from "../../../assets/images/img2.jpg";
import img2 from "../../../assets/images/img5.jpg";
import img1 from "../../../assets/images/img6.jpg";
import img4 from "../../../assets/images/img8.jpg";
import img5 from "../../../assets/images/img9.jpg";

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
    <section className="flex flex-1 bg-white w-screen h-screen">
      <aside className='flex bg-white p-9 md:pl-32 bg-bottom justify-center flex-1 flex-col md:bg-none bg-[url("src/assets/images/img7.jpg")]'>
        <span className="text-black w-full md:w-3/5 md:text-[32px]/[38.4px] font-normal text-wrap text-lg text-left">
          <h3 className="md:text-[44px]/[51.1px] text-2xl font-semibold text-pretty mb-4">
             Driver's lincense Application
          </h3>
          Get your Driver license done anywhere in the world <em className="text-[#22C55E] ">in an instant</em>
        </span>
        <div className="flex items-center gap-7">

        <button className=" mt-4 bg-[#22C55E] text-[18px]/[19.2px] text-white px-8 py-6 font-medium rounded-full w-fit">Get Started</button>
        {/* <button className=" mt-4 text-[#22C55E] border border-[#22C55E] text-[18px]/[19.2px] bg-white px-8 py-6 font-medium rounded-full w-fit"> Application</button> */}
        </div>

      </aside>
      <aside className=" hidden md:flex md:flex-1 md:h-full ">
          <img src={imgArray[index]} className='object-cover w-full h-full' alt="image" />
      </aside>

    </section>
  );
};
