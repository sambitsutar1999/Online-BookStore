import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, BASE_URL } from "../constant";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (query) => {
    const response = await fetch(`${BASE_URL}?q=${query}:keyes&key=${API_URL}`);
    const data = await response.json();
    return data.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown',
      description: item.volumeInfo.description || 'No description available',
      coverImage: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
      genre: item.volumeInfo.categories?.[0] || 'Unknown',
      price: Math.floor(Math.random() * 20) + 10,
    }));
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    cart: loadCartFromLocalStorage(),
    searchQuery: '',
    status: 'idle',
  },
  reducers: {
    addToCart: (state, action) => {
      const existingBook = state.cart.find(book => book.id === action.payload.id);
      if (existingBook) {
        existingBook.quantity = (existingBook.quantity || 1) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.cart);
    },
    
    removeFromCart: (state, action) => {
      const bookId = action.payload;
      const existingBook = state.cart.find(book => book.id === bookId);
      if (existingBook) {
        if (existingBook.quantity > 1) {
          existingBook.quantity -= 1;
        } else {
          state.cart = state.cart.filter(book => book.id !== bookId);
        }
        saveCartToLocalStorage(state.cart);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },
  
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; 
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; 
      });
  },
});

export const { addToCart, removeFromCart, clearCart, setSearchQuery } = bookSlice.actions;

export default bookSlice.reducer;



