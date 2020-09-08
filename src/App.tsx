import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import MainLayout from './layout/MainLayout';

function App() {


  return (
    <div className="App">
      <MainLayout></MainLayout>
      <header className="App-header">
        
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
