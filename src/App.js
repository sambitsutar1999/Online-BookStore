
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ImageSlider from './components/slider/ImageSlider';
import AuthPage from './components/AuthPage';
import Banner from './components/Banner';
import Socials from './components/Socials';

function App() {
  const user = useSelector((state) => state.auth?.user || null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
               <Banner />
              
              <BookList />
              <ImageSlider />
            </>
          }
        />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />


        <Route
          path="/checkout"
          element={user ? <Checkout /> : <Navigate to="/auth" />}
        />


        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Socials />
      <Footer />
    </>
  );
}

export default App;





