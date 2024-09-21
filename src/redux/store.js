import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './BookSlice'; 
import authReducer from './AuthSlice'


const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});

export default store;
