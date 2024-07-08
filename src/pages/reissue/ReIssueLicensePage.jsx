import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import SearchForm from './components/SearcForm';

const ReIssueLicensePage = () => {
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2); // Move to payment form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementing the  submission logic here
    // alert('Payment Submitted');
    const paymentDetails = {
      // Replace these with actual data collected from your form
      cardName: 'John Doe',
      cardExpiry: '12/25',
      cardNumber: '1234 5678 9012 3456',
      cardPIN: '1234',
      cvv: '123',
    };

    try {
      const response = await fetch('https://example.com/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (!response.ok) {
        throw new Error('Payment submission failed');
      }

      const result = await response.json();
      console.log(result); // Process result here
      // Implement success logic, e.g., showing a success message or redirecting the user
    } catch (error) {
      console.error(error);
      // Implement error handling logic, e.g., showing an error message
    }
  };

  return (
    <div>
      {step === 1 ? (
        <SearchForm onNext={handleNext} />
      ) : (
        <PaymentForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default ReIssueLicensePage;
