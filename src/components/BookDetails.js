// src/components/BookDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/BookSlice';
import './BookDetails.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = useSelector(state => state.books.list.find(book => book.id === bookId));
  const dispatch = useDispatch();

  return (
    <div className="book-details">
      <div className="book-details-container">
        <img src={book.coverImage} alt={book.title} className="book-cover" />
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">{book.author}</p>
          <p className="book-description">{book.description}</p>
          <p className="book-price">${book.price}</p>
          <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(book))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

