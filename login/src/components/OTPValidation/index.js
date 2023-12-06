import React, { useState } from 'react';
import OTPInput from 'otp-input-react';

const OTPValidation = () => {
  const [OTP, setOTP] = useState('');

  const inputStyles = {
    height: 40,
    width: 60,
    borderRadius: 8,
    placeholder: '-',
    borderWidth: 0.8,
    borderColor: '#E3E6E8',
    marginTop: 20,
    marginRight: 6,
    marginLeft: 6,
    marginBottom: 10,
  };

  const places = ['-', '-', '-', '-'];

  return (
    <div>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        OTPLength={4}
        otpType="number"
        inputStyles={inputStyles}
        isInputNum
        isInputSecure
        disabled={false}
        placeholder={places}
      />
    </div>
  );
};

export default OTPValidation;
