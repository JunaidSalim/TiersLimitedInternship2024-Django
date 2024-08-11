import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
