
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { createAccount } from "../api";
import { signupFields } from "../constants/FormFields";
import Input from "./Input";
import SignUpResponse from "./SignUpResponse";


const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup({ paragraph, linkUrl, linkName }) {
    const [signupState, setSignupState] = useState(fieldsState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>
        setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const clearForm = () => {
        setSignupState({
            email: "",
            username: "",
            password: "",
            confirm_password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        const data = {
            username: signupState.username,
            email: signupState.email,
            password: signupState.password,
            confirm_password: signupState.confirm_password,
        };

        const signupResponse = await createAccount(data);

        if (signupResponse.id) {
            setIsSubmitting(false);
            setEmail(signupResponse.email);
            setIsOpen(true);
            clearForm();
            console.log(signupResponse);
            return;
        }

        setIsSubmitting(false);
        setError("Something went wrong! Please try again.");
    };

    return (
        <form className="space-y-6 p-6" onSubmit={handleSubmit}>
            {error && (
                <p className="bg-red-100 text-red-700 py-2 px-4 rounded-md">
                    {error}
                </p>
            )}
            <div className="">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
                <button
                    className="bg-custom-green w-full hover:bg-green-600 px-4 py-2 text-white font-medium rounded-lg mt-4"
                    onSubmit={handleSubmit}
                    type="submit"
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Creating account...</span>
                        </div>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
                {paragraph}{" "}
                <Link
                    to={linkUrl}
                    className="font-medium text-custom-green hover:text-green-800"
                >
                    {linkName}
                </Link>
            </p>

            <Modal isOpen={isOpen}>
                <SignUpResponse
                    setIsModalOpen={setIsOpen}
                    email={email}
                />
            </Modal>
        </form>
    );

}
