import React from 'react';
import SingleDetail from '../utils/SingleDetail';
const InstantDriverDetails = () => {
    return (
         <div className='flex mt-10 p-6 relative border-4 border-custom-grey w-full'>
            <h4 className="p-3 bg-white text-3xl font-medium absolute top-[-29px]">Instant Driver Details</h4>
            <div className='grid grid-cols-3 w-full'>
                <SingleDetail
                    label='License ID'
                    details='Ogundeji Oluwapelumi Ayodeji'
                />
                <SingleDetail
                    label='NIN'
                    details='Ogundeji Oluwapelumi Ayodeji'
                />
                <SingleDetail
                    label='Driving Certificate Number'
                    details='Ogundeji Oluwapelumi Ayodeji'
                />
                <SingleDetail
                    label='Joined'
                    details='Ogundeji Oluwapelumi Ayodeji' />

                <SingleDetail
                    label='Last Renewal'
                    details='Ogundeji Oluwapelumi Ayodeji'
                />
                <SingleDetail
                    label='Next Renewal'
                    details='Ogundeji Oluwapelumi Ayodeji'
                />
            </div>
        </div>
    )
}

export default InstantDriverDetails
