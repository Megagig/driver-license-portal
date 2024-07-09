import React from 'react'

const SingleDetail = (props) => {
    return (
        <div className="flex p-6 items-center gap-6">
            <span className="flex-auto text-lg font-normal text-nowrap w-1/5">
                {props.label}
            </span>
            <p className="text-lg font-normal border-4 border-custom-grey p-4 mr-6 text-nowrap">
                {props.details}
            </p>
        </div>
    )
}

export default SingleDetail
