import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <span className="logo-text">TheBookStore</span>
        </Link>
      </div>
      <div className="header-right">
        <Link to="/" className="icon">
          <FaHome size={24} />
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

