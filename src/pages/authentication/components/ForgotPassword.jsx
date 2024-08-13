import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful submission here
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-2xl">
        {' '}
        {/* Increased padding */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Forgot Password
        </h2>{' '}
        {/* Increased margin-bottom */}
        <p className="text-xl text-gray-500 mb-12">
          Enter your email and we will Send you a reset link
        </p>{' '}
        {/* Increased margin-bottom */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {' '}
          {/* Added space between form elements */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-600 mb-4"
            >
              E-mail or phone number
            </label>{' '}
            {/* Increased margin-bottom */}
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200 bg-gray-50 text-lg"
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-5 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send me the link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
