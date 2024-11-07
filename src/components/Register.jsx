// src/components/Register.js
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = () => {
    // Logic to send verification code
    setIsCodeSent(true);
  };

  return (
    <div className="p-8 rounded-lg shadow-lg bg-white max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleSendCode}
        className="bg-primaryBlue text-white py-2 px-4 rounded mt-4"
      >
        {isCodeSent ? 'Resend Code' : 'Send Verification Code'}
      </button>
      {isCodeSent && (
        <input
          type="text"
          placeholder="Enter Verification Code"
          className="border p-2 mt-4 w-full"
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      )}
    </div>
  );
}

export default Register;
