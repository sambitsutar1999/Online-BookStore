import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './BookSlice'; 


const store = configureStore({
  reducer: {
    books: bookReducer,  // Register the bookReducer under the 'books' key
  },
});

export default store;
