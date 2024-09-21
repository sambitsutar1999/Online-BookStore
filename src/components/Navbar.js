import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { logoutUser } from '../redux/AuthSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user || null);
  const cart = useSelector((state) => state.books.cart);
  
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/" className="logo">
          <span className="logo-text">TheBookStore</span>
        </Link>
      </div>

      <div className="middle-section">
        <SearchBar />
      </div>

      <div className="right-section">
        <Link to="/" className="icon">
          <FaHome size={24} />
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{totalQuantity}</span>
        </Link>
        {user ? (
          <div className="icon" onClick={handleLogout}>
            <FaSignOutAlt size={24} />
          </div>
        ) : (
          <Link to="/auth" className="icon">
            <FaUser size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


