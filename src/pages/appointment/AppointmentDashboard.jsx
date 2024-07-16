import React from 'react'
import Input from '../profile/utils/Input'
import TableRow from './components/TableRow'

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
        image: "https://github.com/Megagig/driver-license-portal/blob/13ac1e81aa634480f412b95d9c5a4e17c5007917/src/assets/images/close-up-friends-traveling-by-car.jpg"
    }


 export const AppointmentDashboard = () => {
    return (
        <section className="w-screen grid">
            <div>
                <Input type="search" />
            </div>
            
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                Last 30 days
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" >
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-2style00" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        S/N
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Application ID
                </th>
                <th scope="col" className="px-6 py-3">
                    APPLICATION TYPE
                </th>   
                <th scope="col" className="px-6 py-3">
                    DATE
                </th>
                <th scope="col" className="px-6 py-3">
                    TIME
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data.application.map((value, index) =>{
                return  <TableRow value={value} index={index+1} key={index} data={data} />
            })}
        </tbody>
    </table>
</div>


        </section>
    )
}

