import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import SearchForm from './components/SearcForm';

const ReIssueLicensePage = () => {
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2); // Move to payment form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here
    alert('Payment Submitted');
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
