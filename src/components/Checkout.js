import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/BookSlice'; // Import the clearCart action
import './Checkout.css'; // Import the external CSS file

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.books.cart);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // State to track successful checkout

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required.';
    if (!form.address) newErrors.address = 'Address is required.';
    if (!form.payment) newErrors.payment = 'Payment details are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Dispatch clearCart action
      dispatch(clearCart());

      // Set success message and clear form
      setSuccess(true);
      setForm({ name: '', email: '', address: '', payment: '' });
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear errors on input change
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, book) => total + (book.price * (book.quantity || 1)), 0);

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      {success ? (
        <div className="success-message">
          <h3>Thank you for your order!</h3>
          <p>Your order has been successfully placed.</p>
        </div>
      ) : (
        <>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map((book) => (
              <div key={book.id} className="order-item">
                <p>{book.title} x {book.quantity || 1} - ${(book.price * (book.quantity || 1)).toFixed(2)}</p>
              </div>
            ))}
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="form-input"
                required
              />
              {errors.address && <p className="form-error">{errors.address}</p>}
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
              {errors.payment && <p className="form-error">{errors.payment}</p>}
            </div>

            <button
              type="submit"
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;


