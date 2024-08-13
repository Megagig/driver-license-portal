import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../auth/api';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await login({ email, password });

      if (response.access && response.refresh) {
        // Store auth data in sessionStorage
        sessionStorage.setItem(
          'auth',
          JSON.stringify({
            access: response.access,
            refresh: response.refresh,
          })
        );

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default SignIn;
