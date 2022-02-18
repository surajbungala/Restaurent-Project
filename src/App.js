import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Ristorante conFusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
