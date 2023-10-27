import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"BIENVENIDO A NUESTRA TIENDA DE PLANTAS"} />
      <Footer />
    </div>
  )
}

export default App
