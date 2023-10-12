import React, { useState } from 'react';
import { auth, database } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set, ref } from 'firebase/database';
import '../signup.css'; // Import the CSS file

export default function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    homeTown: '',
    state: '',
    country: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const newUser = userCredential.user;
      const userRef = ref(database, `users/${newUser.uid}`);
      await set(userRef, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobileNumber: formData.mobileNumber,
        homeTown: formData.homeTown,
        state: formData.state,
        country: formData.country,
      });
      console.log('Created User successfully');
      console.log(userCredential.user);

      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Error occurred while signing up: ', error.message);
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="heading">
          <h1>Signup Form</h1>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span>Password</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <span>Mobile Number</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="homeTown"
            value={formData.homeTown}
            onChange={handleChange}
            required
          />
          <span>Home Town</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <span>State</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <span>Country</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
