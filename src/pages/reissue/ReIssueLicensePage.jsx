import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PaymentForm from './PaymentForm';

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
