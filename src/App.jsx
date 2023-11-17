import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const [seleccionCategoria, setSeleccionCategoria] = useState(null);

  return (
    <div>
      <BrowserRouter>
      <NavBar setSeleccionCategoria={setSeleccionCategoria} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

