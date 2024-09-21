// src/components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/BookSlice';
import { Link } from 'react-router-dom';
import './Cart.css'; // Import the external CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.books.cart);

  // Calculate total price
  const totalPrice = cart.reduce((total, book) => total + (book.price * (book.quantity || 1)), 0);

  // Handle quantity change
  const updateQuantity = (book, increment) => {
    if (increment) {
      dispatch({ type: 'books/addToCart', payload: { ...book, quantity: (book.quantity || 1) + 1 } });
    } else if (book.quantity > 1) {
      dispatch({ type: 'books/addToCart', payload: { ...book, quantity: (book.quantity || 1) - 1 } });
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => (
            <div key={book.id} className="cart-item">
              <img src={book.coverImage} alt={book.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{book.title}</h3>
                <p className="cart-item-author">{book.author}</p>
                <p className="cart-item-price">${book.price}</p>
                <p className="cart-item-subtotal">
                  Subtotal: ${(book.price * (book.quantity || 1)).toFixed(2)}
                </p>
                <div className="cart-item-quantity">
                  <button className="quantity-button" onClick={() => updateQuantity(book, false)}>
                    -
                  </button>
                  <span>{book.quantity || 1}</span>
                  <button className="quantity-button" onClick={() => updateQuantity(book, true)}>
                    +
                  </button>
                </div>
              </div>
              <button className="remove-button" onClick={() => dispatch(removeFromCart(book.id))}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="empty-cart-button" onClick={() => dispatch(clearCart())}>
            Empty Cart
          </button>
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;



