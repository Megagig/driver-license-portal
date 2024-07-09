import { FaEdit } from "react-icons/fa";
import BasicDetails from "./components/BasicDetails";
import LoginDetails from "./components/LoginDetails";
const Profile = () => {
  return (
    <section className='w-screen h-screen p-32'>
        <h3 className='text-[44px]/[56px] font-bold'>Profile Details</h3>    

        <div className="w-fit ml-auto mr-auto">
            <BasicDetails />
            <LoginDetails />
            <div className='flex mt-6 p-6 relative border-4 border-custom-grey'>
                <h4 className=" bg-white text-lg font-medium absolute top-[-16px]">Instant Driver Details</h4>
                <div className='flex flex-col'>
                    <div>
                        <span>
                           Joined
                        </span>
                        <p>
                            Ogundeji Oluwapelumi Ayodeji
                        </p>
                        <FaEdit />
                    </div>
                    <div>
                        <span>
                            Last Renewal
                        </span>
                        <p>
                            Ogundeji Oluwapelumi Ayodeji
                        </p>
                        <FaEdit />
                    </div>
                    <div>
                        <span>
                            Next Renewal
                        </span>
                        <p>
                            Ogundeji Oluwapelumi Ayodeji
                        </p>
                        <FaEdit />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile