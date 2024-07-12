import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom"


const Dashboard = () => {
    const { auth } = useAuth()
    const user = auth.user

    return (
        <div className="px-20 grid  gap-4 py-4">

            <div className="flex gap-3 justify-between items-center">
                <div className="flex py-4 gap-3 items-center">
                    <div className="border h-fit p-1 rounded-full w-fit ">
                        {
                            !user.image ? <FaUserAlt className="text-4xl" /> : <img className="h-20 rounded-full" src={user.image} alt="" />
                        }

                    </div>
                    <div>
                        <h1 className="text-4xl">Hello <span className="text-custom-green font-bold">{user.username}</span> </h1>
                        <h1 className="text-3xl">Welcome Back!</h1>

                    </div>
                </div>

                {/* <div className="flex gap-3">
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">
                            
                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">

                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                </div> */}



            </div>

            <div className="flex gap-10 justify-between">


                <div className="border h-fit rounded-lg w-full p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold">Drivers License Details</h1>
                        <button className="border bg-custom-green rounded-md text-white text-sm py-1.5 px-2">Edit</button>
                    </div>

                    <div className="border grid  gap-2 p-4 rounded-xl">
                        <p> <span className="font-bold text-custom-green">License No:</span> <span className=" text-xl">IDL123456</span></p>
                        <p> <span className="font-bold text-custom-green" >License Class:</span> <span className=" text-xl">A</span></p>
                        <p> <span className="font-bold text-custom-green">Country of Issue:</span> <span className=" text-xl">Nigeria</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Issue: </span><span className=" text-xl">22-06-2023</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Expiration:</span> <span className=" text-xl">22-06-2025</span></p>

                    </div>
                </div>

                <div className="border h-fit rounded-lg w-full p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold"> Drivers Information</h1>

                        <Link to="/profile">
                            <button className="border bg-custom-green rounded-md text-white text-sm py-1.5 px-2">View Profile</button>
                        </Link>


                    </div>
                    <div className="border grid  gap-2 p-4 rounded-xl">
                        <p> <span className="font-bold text-custom-green">First Name:</span> <span className=" text-xl">{user.firstName}</span></p>
                        <p> <span className="font-bold text-custom-green" >Last Name:</span> <span className=" text-xl">{user.lastName}</span></p>
                        <p> <span className="font-bold text-custom-green">Email:</span> <span className=" text-xl">{user.email}</span></p>
                        <p> <span className="font-bold text-custom-green">Sex: </span><span className=" text-xl">{user.gender}</span></p>
                        <p> <span className="font-bold text-custom-green">Phone No:</span> <span className=" text-xl">+234900000000</span></p>

                    </div>


                </div>
            </div>
            <div className="mt-8">
                <h1 className="font-bold text-2xl mb-6">Transaction History</h1>
                <table className="w-full">
                    <tr className="bg-custom-green h-10 border-collapse text-white" >
                        <th className="p-2 w-16" >S/N</th>
                        <th className="p-2 border-x">Transaction Applied</th>
                        <th className="p-2  border-x">Reference No</th>
                        <th className="p-2 ">Status</th>
                    </tr>

                    <tr>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2  border-x">License Renewal</td>
                        <td className="p-2  border-x">12345</td>
                        <td className="p-2  ">Success</td>
                    </tr>
                    <tr className="bg-green-100">
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 border-x">License Renewal</td>
                        <td className="p-2 border-x">12345</td>
                        <td className="p-2 text-red-500">Failed</td>
                    </tr>

                    <tr>
                        <td className="p-2 text-center">3</td>
                        <td className="p-2 border-x">License Renewal</td>
                        <td className="p-2 border-x">12345</td>
                        <td className="p-2 text-orange-500">Pending</td>
                    </tr>

                    <tr className="bg-green-100">
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 border-x">License Renewal</td>
                        <td className="p-2 border-x">12345</td>
                        <td className="p-2">Success</td>
                    </tr>


                </table>
            </div>
        </div>
    )
}

export default Dashboard