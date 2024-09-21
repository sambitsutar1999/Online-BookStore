import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/BookSlice';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar-container">
      <FaSearch className="search-icon" />
      <input
        type='text'
        placeholder='Search by title, author, or genre'
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;


