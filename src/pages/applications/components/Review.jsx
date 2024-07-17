import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

const Review = ({
    biodata,
    contactData,
    renewalReissueData,
    step,
    setStep,
    setIsReviewed,
    openModal,
    applicationType,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        console.log(biodata);
        console.log(contactData);

        setIsSubmitting(true);

        setTimeout(() => {
            setIsReviewed(true);
            openModal();
            setIsSubmitting(false);
        }, 3000);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div className="flex flex-col px-10 py-4">
            {applicationType === "new" ? (
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Biodata Review */}
                    <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                        <div className="flex justify-between bg-green-100 p-4">
                            <h4 className="text-xl font-bold text-custom-green">
                                Biodata
                            </h4>
                            <button
                                className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md"
                                onClick={() => setStep(1)}
                            >
                                <BiSolidEdit />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 p-4">
                            <div className="w-20 h-20 rounded-full justify-center">
                                <img src={biodata.passport_photo} className="object-cover w-full rounded-full" alt="Passport Photo" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="first_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        First Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="first_name"
                                    >
                                        {biodata.first_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="last_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Last Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="last_name"
                                    >
                                        {biodata.last_name}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="middle_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Middle Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="middle_name"
                                    >
                                        {biodata.middle_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="gender"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Gender
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="gender"
                                    >
                                        {biodata.gender}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="mothers_maiden_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Mother's Maiden Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="mothers_maiden_name"
                                    >
                                        {biodata.mothers_maiden_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="date_of_birth"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Date of Birth
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="date_of_birth"
                                    >
                                        {biodata.date_of_birth}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="nin"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        NIN
                                    </label>
                                    <p className="font-bold text-grey" id="nin">
                                        {biodata.nin}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="driving_school_certificate_number"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Driving Certificate ID
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="driving_school_certificate_number"
                                    >
                                        {biodata.driving_school_certificate_number}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Review */}
                    <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                        <div className="flex justify-between bg-green-100 p-4">
                            <h4 className="text-xl font-bold text-custom-green">
                                Contact
                            </h4>
                            <button
                                className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md"
                                onClick={() => setStep(2)}
                            >
                                <BiSolidEdit />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Email
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="email"
                                    >
                                        {contactData.email}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="phone"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Phone Number
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="phone"
                                    >
                                        {contactData.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="state"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        State
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="state"
                                    >
                                        {contactData.state}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="lga"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Local Govt. Area
                                    </label>
                                    <p className="font-bold text-grey" id="lga">
                                        {contactData.lga}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="streetAddress"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Street Address
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="streetAddress"
                                    >
                                        {contactData.streetAddress}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full md:w-1/2 md:mx-auto shadow-md border border-neutral-200 rounded-md">
                    <div className="flex justify-between bg-green-100 p-4">
                        <h4 className="text-xl font-bold text-custom-green">
                            Application Data
                        </h4>
                        <button
                            className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md"
                            onClick={() => setStep(1)}
                        >
                            <BiSolidEdit />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Email
                                </label>
                                <p className="font-bold text-grey" id="email">
                                    {renewalReissueData?.email}
                                </p>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="license_id"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    License ID
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="license_id"
                                >
                                    {renewalReissueData?.license_id}
                                </p>
                            </div>
                        </div>
                            {applicationType === "re-issue" && (
                                <div className="w-full">
                                    <label
                                        htmlFor="license_id"
                                        className="mb-2 block text-base font-medium text-neutral-700"
                                    >Affidavit/Police Report File</label>
                                    <img src={renewalReissueData?.affidavit_police_report} className="object-cover" alt="Affidavit" />
                                </div>
                            )}
                    </div>
                </div>
            )}

            <div className="flex justify-between mt-4 md:mt-8">
                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={goBack}
                >
                    Previous
                </button>

                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={submit}
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        "Submit Application"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Review;
