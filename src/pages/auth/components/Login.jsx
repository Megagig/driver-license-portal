import { useState } from 'react';
import axios from 'axios';
import { loginFields } from '../constants/FormFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { Link } from 'react-router-dom';

// new-snippet
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// End of new-snippet

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login({ paragraph, linkUrl, linkName }) {
  const [loginState, setLoginState] = useState(fieldsState);

  // new-snippet
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  // End of new-snippet

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
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

      console.log(res.status);
      // if (res.status === 200) {
      //   const token = res.data.token;
      //   const fullUserRes = await axios.get(
      //     'https://saviorte.pythonanywhere.com/api/user/',
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );

      //   if (fullUserRes.status === 200) {
      //     sessionStorage.setItem('user', JSON.stringify(fullUserRes.data));
      //   }

      //   const user = res.data;
      //   setAuth({ user });
      //   sessionStorage.setItem('auth', JSON.stringify({ user }));
      //   navigate('/dashboard');
      // }
    } catch (error) {
      console.error('Error during authentication:', error);
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
