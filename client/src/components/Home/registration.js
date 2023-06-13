import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pincode, setPincode] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4000/register', {
        name,
        email,
        password,
        city,
        state,
        phoneNo,
        pincode,
        referralCode,
      });
      console.log(response.data);
      setSuccessMessage('Registration successful');
      setErrorMessage('');
      // Clear form inputs after successful registration
      setName('');
      setEmail('');
      setPassword('');
      setCity('');
      setState('');
      setPhoneNo('');
      setPincode('');
      setReferralCode('');
    } catch (error) {
      console.error(error.response.data);
      setSuccessMessage('');
      setErrorMessage('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      console.log(response.data);
      setErrorMessage('');
      // Clear form inputs after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <h1>Registration Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Referral Code"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
