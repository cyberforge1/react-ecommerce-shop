// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import ProductLoader from './containers/ProductLoader/ProductLoader.jsx';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import MensPage from './pages/MensPage/MensPage';
import WomensPage from './pages/WomensPage/WomensPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.scss';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductLoader />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/womens" element={<WomensPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
