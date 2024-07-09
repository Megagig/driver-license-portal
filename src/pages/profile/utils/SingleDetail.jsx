import React from 'react'

const SingleDetail = (props) => {
    return (
        <div className="flex p-6 items-center gap-6 w-full">
            <span className="flex-auto text-lg font-normal text-wrap w-1/5">
                {props.label}
            </span>
            <p className="text-lg font-normal border-4 border-custom-grey p-4 text-wrap w-4/5">
                {props.details}
            </p>
        </div>
    )
}

export default SingleDetail
