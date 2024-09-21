// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addToCart } from '../redux/BookSlice';
import { Link } from 'react-router-dom';
import './BookList.css'; // Import the external CSS file

function BookList() {
    const dispatch = useDispatch();
    const { list: books, status, searchQuery } = useSelector(state => state.books);
    const [viewAll, setViewAll] = useState(false); // State to toggle view all books

    useEffect(() => {
        dispatch(fetchBooks(searchQuery));
    }, [dispatch, searchQuery]);

    if (status === 'loading') return <p className="loading-text">Loading...</p>;
    if (status === 'failed') return <p className="error-text">Failed to fetch books</p>;

    return (
        <div className="book-list-container">
            <div className="book-grid">
                {books.slice(0, viewAll ? books.length : 4).map((book) => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverImage} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h3 className="book-title">{book.title}</h3>
                            <p className="book-author">{book.author}</p>
                            <p className="book-price">${book.price}</p>
                        </div>
                        <div className="book-actions">
                            <button
                                onClick={() => dispatch(addToCart(book))}
                                className="btn add-to-cart-button"
                            >
                                Add to Cart
                            </button>
                            <Link
                                to={`/book/${book.id}`}
                                className="btn view-details-button"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className="view-all-button" 
                onClick={() => setViewAll(prev => !prev)}
            >
                {viewAll ? 'Show Less' : 'View All Books'}
            </button>
        </div>
    );
}

export default BookList;
