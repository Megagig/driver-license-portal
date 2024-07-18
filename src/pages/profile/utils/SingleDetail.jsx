import React from 'react'

const SingleDetail = (props) => {
    return (
        <div className="flex p-1 md:p-2 lg:p-4 items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 w-full mmb-4">
            <span className="flex-auto text-sm md:text-base lg:text-lg font-normal text-wrap w-2/5 break-words">
                {props.label}
            </span>
            <p className="tezt-sm md:text-base lg:text-lg font-normal border-4 border-t-0 border-x-0 border-custom-grey p-1 pl-2 pb-0 md:p-4 md:pb-1 lg:pb-2 text-wrap w-4/5 break-words">
                {props.details}
            </p>
        </div>
    )
}

export default SingleDetail
