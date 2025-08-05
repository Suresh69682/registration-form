import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, age } = formData;

    if (name.length < 3) {
      return "Name must be at least 3 characters.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email format.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    if (isNaN(age) || age < 13 || age > 120) {
      return "Age must be between 13 and 120.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validateForm();
    if (validationMessage) {
      setError(validationMessage);
    } else {
      setError('');
      alert('Registration successful!');
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="container">
      <h2>React Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" id="age" value={formData.age} onChange={handleChange} required />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;

