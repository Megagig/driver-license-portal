import React from "react";
import logo from "../../assets/Logo.svg";
import coatOfArm from "../../assets/coatOfArm.png";

const Logo = () => {
    return (
        <div className="flex items-center divide-x divide-white">
            <img
                src={coatOfArm}
                alt="Coat of Arm"
                className="w-12 md:w-16 h-auto pr-3"
            />
            <img
                src={logo}
                alt="Dannon Group Logo"
                className="w-28 md:w-36 h-auto pl-3"
            />
        </div>
    );
};

export default Logo;
