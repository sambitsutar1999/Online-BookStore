// src/components/AuthPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, resetPassword } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth?.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(register(email, password));
    } else {
      dispatch(login(email, password)).then(() => {
        navigate('/checkout');
      });
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
    alert('Check your email for a password reset link.');
    setIsForgotPassword(false);
  };

  return (
    <div className="auth-page">
      <h2>{isRegister ? 'Register' : isForgotPassword ? 'Forgot Password' : 'Login'}</h2>
      {error && <p className="error">{error}</p>}
      {isForgotPassword ? (
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
          <button onClick={() => setIsForgotPassword(false)}>
            Back to {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
          <button onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
          </button>
          <button onClick={() => setIsForgotPassword(true)}>
            Forgot Password?
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthPage;




