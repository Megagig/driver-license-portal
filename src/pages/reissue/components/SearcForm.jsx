import React from 'react';

const SearchForm = ({ onNext }) => {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Search License Details
      </h2>
      <form onSubmit={onNext} className="space-y-6">
        <div>
          <label
            htmlFor="licenseNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Driver License Number
          </label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
