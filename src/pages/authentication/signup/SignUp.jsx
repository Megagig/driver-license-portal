import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../../auth/api';
import WelcomeModal from '../components/WelcomeModal';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const passwordRules = [
    { rule: /.{8,24}/, text: '8-24 characters' },
    { rule: /[A-Z]/, text: 'At least 1 capital letter' },
    { rule: /\d/, text: 'At least 1 digit' },
    { rule: /[!#@$_\-*&%]/, text: 'At least 1 special character' },
    {
      rule: /^[A-Za-z\d!#@$_\-*&%]{8,24}$/,
      text: 'Allowed special characters: ! # @ $ _ - * & %',
    },
  ];
  return (
    <div>
      <h1>Sign in</h1>
    </div>
  );
};

export default SignUp;
