import React from 'react';
import LoginPage from '../auth/login/LoginPage';
import SignupPage from '../auth/signup/SignupPage';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage Component Here...</h1>
      <LoginPage />
      <SignupPage />
    </div>
  );
};

export default HomePage;
