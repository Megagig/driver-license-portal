import React from 'react';
import { FaEdit } from "react-icons/fa";


const Button = (props) => {
    return (
        <button className="flex gap-3 bg-white text-2xl md:text-xl font-medium absolute top-[-16px] right-10 cursor-pointer border border-green-100 p-3" onClick={ props.handleEditForm}>
            <FaEdit className="" />
            Edit
        </button>
    )
}

export default Button
