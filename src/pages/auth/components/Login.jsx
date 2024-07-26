
import { useState, useEffect } from 'react';
import axios from 'axios';
import { loginFields } from '../constants/FormFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';


const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login({ paragraph, linkUrl, linkName }) {
  const [loginState, setLoginState] = useState(fieldsState);

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (token && refreshToken) {
      setAuth({ token, refreshToken });
    }
  }, [setAuth]);


  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };



  const authenticateUser = async () => {
    try {
      const res = await axios.post(
        'https://saviorte.pythonanywhere.com/api/login/',
        {
          email: loginState['email'],
          password: loginState['password'],
          expiresInMins: 30,
        }
      );


      if (res.status === 200) {
        const token = res.data.token;
        const refreshToken = res.data.refresh;

        // Store tokens in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        // Set auth state
        setAuth({ token, refreshToken });

        toast.success('Login successful!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('Login failed. Please try again.');
    }
  };


  return (
    <>
      <form className="space-y-6 px-6 py-4" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
        <p className="mt-2 text-center text-sm text-gray-600">
          {paragraph}{' '}
          <Link
            to={linkUrl}
            className="font-medium text-custom-green hover:text-green-800"
          >
            {linkName}
          </Link>
        </p>
      </form>
    </>
  );
}
