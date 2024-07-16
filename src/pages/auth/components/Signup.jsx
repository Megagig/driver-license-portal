import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { signupFields } from '../constants/FormFields';

import FormAction from './FormAction';
import Input from './Input';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  const createAccount = async () => {
    try {
      const response = await axios.post(
        'https://saviorte.pythonanywhere.com/api/signup',
        signupState
      );
      alert('Account created successfully!'); // Notify user
      navigate('/login'); // Redirect to login page
    } catch (error) {
      const errorMsg = error.response ? error.response.data : error.message;
      console.error('Signup error:', errorMsg);
      setErrorMessage(errorMsg); // Set error message to display
    }
  };

  return (
    <form className="space-y-6 p-9" onSubmit={handleSubmit}>
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
        <FormAction handleSubmit={handleSubmit} text="Signup" />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}{' '}
        {/* Display error message if any */}
      </div>
    </form>
  );
}
