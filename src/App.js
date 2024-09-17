import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import AcercaDe from './components/AcercaDe';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Servicios />
        <Proyectos />
        <AcercaDe />
        <Contacto />
        <WhatsAppButton />
      </main>
    </div>
  );
}

export default App;
