import React from 'react';

const PaymentForm = ({ onSubmit }) => {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Payment Details
      </h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="cardName"
            className="block text-sm font-medium text-gray-700"
          >
            Card Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="cardExpiry"
            className="block text-sm font-medium text-gray-700"
          >
            Card Expiry
          </label>
          <input
            type="text"
            id="cardExpiry"
            name="cardExpiry"
            placeholder="MM/YY"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="cardPIN"
            className="block text-sm font-medium text-gray-700"
          >
            Card PIN
          </label>
          <input
            type="password"
            id="cardPIN"
            name="cardPIN"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
