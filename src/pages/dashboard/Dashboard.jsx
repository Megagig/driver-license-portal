import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { GrCertificate, GrDocumentVerified } from "react-icons/gr";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { IoDocuments } from "react-icons/io5";
import { MdEditDocument, MdOutlineDriveEta } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbCapture } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { auth } = useAuth()

    console.log(auth.user)


    let style


    return (
        <div className="md:px-10 xl:px-20 max-w-[100vw] overflow-hidden px-4  py-4 pb-20 ">

            <div >
                <div className=" flex md:py-4 gap-3 items-center">
                    <div className=" ">
                        {
                            !auth.user?.image ? <FaUserAlt className="text-8xl p-1 border rounded-full" /> : <img className="h-16 rounded-full" src={auth.user?.image} alt="" />
                        }

                    </div>
                    <div>
                        <h1 className="text-2xl md:text-2xl">Hello <span className="text-custom-green font-bold">{auth.user?.username}</span> </h1>
                        <p>Welcome Back!</p>

                    </div>
                </div>




            </div>

            {/* <div className=" md:grid mt-4 md:grid-cols-2 md:gap-10 gap-4 items-start ">


                <div className="border h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold">Drivers License Details</h1>

                    </div>

                    <div className="border grid  gap-2 p-4 rounded-xl">
                        <p> <span className="font-bold text-custom-green">License No:</span> <span >{user.bank.iban}</span></p>
                        <p> <span className="font-bold text-custom-green" >License Class:</span> <span >{user.bloodGroup}</span></p>
                        <p> <span className="font-bold text-custom-green">Country of Issue:</span> <span >{user.address.country}</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Issue: </span><span >22-06-2023</span></p>
                        <p> <span className="font-bold text-custom-green">Date of Expiration:</span> <span >22-06-2025</span></p>

                    </div>
                </div>

                <div className="border mt-4 md:mt-0 h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold"> Drivers Information</h1>




                    </div>
                    <div className="border grid truncate overflow-clip gap-2 p-4 text-wrap rounded-xl">
                        <p> <span className="font-bold text-custom-green">First Name:</span> <span >{user.firstName}</span></p>
                        <p> <span className="font-bold text-custom-green" >Last Name:</span> <span>{user.email}</span></p>
                        <p> <span className="font-bold text-custom-green">Sex: </span><span >{user.gender}</span></p>
                        <p> <span className="font-bold text-custom-green">Phone No:</span> <span >{user.phone}</span></p>

                    </div>


                </div>
            </div> */}


            <div className="grid w-full my-10 gap-4 grid-cols-2  lg:grid-cols-4 md:grid-cols-3">
                <Link to={"/profile"} className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100   duration-300  rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center">
                    <FaUser className="text-6xl" />
                    <h3 className=" font-bold">Profile</h3>
                </Link>


                <Link state="new" to="/application" className="hover:scale-105 transition-all hover:-translate-y-2 bg-white rounded-lg grid gap-2  shadow-[0_0_10px_rgba(0,0,0,0.1)] place-items-center place-content-center p-4 h-[10rem] text-center">
                    <GrCertificate className="text-6xl" />
                    <h3 className=" font-bold">New Application</h3>
                </Link>


                <Link to={"/application"} className=" hover:scale-105 transition-all hover:-translate-y-2  shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center md:bg-green-100 md:text-custom-green md:shadow-none">
                    <MdEditDocument className="text-6xl" />
                    <h3 className=" font-bold">Edit Application</h3>
                </Link>


                <Link state="renewal" to={"/application"} className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 text-custom-green md:shadow-[0_0_10px_rgba(0,0,0,0.1)] md:bg-white md:text-black rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center">
                    <IoDocuments className="text-6xl" />
                    <h3 className=" font-bold">Renewal</h3>
                </Link>

                <Link state={"re-issue"} to={"/application"} className="hover:scale-105 transition-all hover:-translate-y-2 lg:bg-white lg:text-black md:shadow-none lg:shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-green-100 rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center">
                    <HiOutlineDocumentDuplicate className="text-6xl" />
                    <h3 className=" font-bold">Reissue</h3>
                </Link>


                <Link to={"/verify-license"} className="hover:scale-105 transition-all hover:-translate-y-2 lg:bg-green-100 lg:text-custom-green lg:shadow-none shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center">
                    <GrDocumentVerified className="text-6xl" />
                    <h3 className=" font-bold">License Verification</h3>
                </Link>


                <Link to={"/get-appointment-slip"} className="hover:scale-105 transition-all hover:-translate-y-2 md:bg-green-100  shadow-[0_0_10px_rgba(0,0,0,0.1)] md:shadow-none rounded-lg grid gap-2 place-items-center place-content-center md:text-custom-green lg:bg-white lg:text-black lg:shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 h-[10rem] text-center">
                    <BsClipboard2CheckFill className="text-6xl" />
                    <h3 className=" font-bold">Appointment Slip</h3>

                </Link>
                <Link to={"/capture-centers"} className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 text-custom-green md:shadow-[0_0_10px_rgba(0,0,0,0.1)] md:bg-white md:text-black rounded-lg grid gap-2 place-items-center place-content-center lg:shadow-none lg:bg-green-100 lg:text-custom-green p-4 h-[10rem] text-center">
                    <TbCapture className="text-6xl" />
                    <h3 className=" font-bold">Capture Centers</h3>

                </Link>
                <Link to={"/driving-schools"} className="hover:scale-105 transition-all hover:-translate-y-2 bg-green-100 rounded-lg grid gap-2 place-items-center place-content-center text-custom-green  p-4 h-[10rem] text-center">
                    <MdOutlineDriveEta className="text-6xl" />
                    <h3 className=" font-bold">Driving Schools</h3>

                </Link>
                <Link to={"/support"} className="hover:scale-105 transition-all hover:-translate-y-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center">
                    <RiCustomerService2Line className="text-6xl" />
                    <h3 className=" font-bold">Support</h3>

                </Link>
                {/* <Link className="shadow-[0_0_10px_rgba(0,0,0,0.1)] md:bg-green-100 md:text-custom-green md:shadow-none rounded-lg grid gap-2 place-items-center place-content-center  p-4 h-[10rem] text-center">
                    <FaPaypal className="text-6xl" />
                    <h3 className=" font-bold">Payments</h3>

                </Link> */}
            </div>
            {/* <div className="mt-8">
                <h1 className="font-bold text-2xl mb-6">Transaction History</h1>
                <div className="max-w-[100vw] overflow-x-hidden">
                    <table className="w-full ">
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
                <div className="mt-10 grid place-content-end">
                    <Button
                        btnLink={"/profile"}
                    >
                        View Transactions
                    </Button>
                </div>


            </div> */}
        </div>
    )
}

export default Dashboard