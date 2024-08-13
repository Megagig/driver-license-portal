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
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default SignIn;
