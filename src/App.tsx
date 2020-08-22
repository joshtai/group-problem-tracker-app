import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginModal from './components/LoginModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginModal onClose={() => {}} onLogin={(email, password) => { console.log(email + " " + password); }}></LoginModal>
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
