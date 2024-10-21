import React from 'react';
import '../App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      username: '', // Add username field
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),

    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:5000/signup', { // Adjust URL based on your backend server
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username, // Include username in the request
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();
        
        if (response.ok) {
          console.log('User created successfully:', data);
          onClose(); // Close the modal after successful sign-up
        } else {
          console.error('Error signing up:', data.error);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    },
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h2>Sign In</h2>
        <form className="form">
          <span className="input-span">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" name="email" id="email" />
          </span>
          <span className="input-span">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" id="password" />
          </span>
          <span className="span"><a href="#">Forgot password?</a></span>
          <input className="submit" type="submit" value="Log in" />
          <span className="span">Don't have an account? <a href="#">Sign up</a></span>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;