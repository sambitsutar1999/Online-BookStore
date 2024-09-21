// src/components/Navbar.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Import React icons
import SearchBar from './SearchBar';
import './Navbar.css'; // Import the external CSS file

const Navbar = () => {
  // Get cart items from Redux state
  const cart = useSelector((state) => state.books.cart);

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div className="navbar">
      {/* Left Section: Logo */}
      <div className="left-section">
        <Link to="/" className="logo">
          <span className="logo-text">TheBookStore</span> {/* Text logo */}
        </Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="middle-section">
        <SearchBar />
      </div>

      {/* Right Section: Home and Cart Icons */}
      <div className="right-section">
        <Link to="/" className="icon">
          <FaHome size={24} /> {/* React icon for Home */}
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} /> {/* React icon for Cart */}
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
