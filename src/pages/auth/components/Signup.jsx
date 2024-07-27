import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from 'react-toastify';
import { signupFields } from "../constants/FormFields";
import { Link } from "react-router-dom";
import FormAction from "./FormAction";
import Modal from "../../../components/Modal";
import SignUpResponse from "./SignUpResponse";
import Input from "./Input";
import { createAccount } from "../api";

const fields = signupFields;
let fieldsState = {};

const PWD_REGEX =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup({ paragraph, linkUrl, linkName }) {
    const [signupState, setSignupState] = useState(fieldsState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const navigate = useNavigate();
    const { password, confirm_password } = signupState;

    useEffect(() => {
        const passwordTest = PWD_REGEX.test(password);
        setIsPasswordValid(passwordTest);
    }, [password, confirm_password]);

    useEffect(() => {
        const matchTest = password === confirm_password;
        setIsPasswordMatch(matchTest);
    }, [confirm_password]);

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

        const validPassword = PWD_REGEX.test(password);

        if (!isPasswordMatch) {
            setError("Passwords do not match!");
            setIsSubmitting(false);
            return;
        }

        if (!isPasswordValid) {
            setError(
                "Invalid password! Password must contain the following: 8-24 characters; at least 1 capital letter; at least 1 digit; at least 1 special character; Allowed characters are !@#$%*&_-"
            );
            setIsSubmitting(false);
            return;
        }

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

            setTimeout(() => {
                navigate("/login");
            }, 5000);
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
                        isPasswordValid={isPasswordValid}
                        isPasswordMatch={isPasswordMatch}
                    />
                ))}
                <button
                    className="bg-custom-green w-full hover:bg-green-800 px-4 py-2 text-white font-medium rounded-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    onSubmit={handleSubmit}
                    type="submit"
                    disabled={!isPasswordValid || !isPasswordMatch}
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
                <SignUpResponse setIsModalOpen={setIsOpen} email={email} />
            </Modal>
        </form>
    );
}
