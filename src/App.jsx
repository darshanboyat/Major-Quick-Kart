import React from 'react';
import './App.css';
import NavBar from './NavBar'

function App() {
  return (
    <>
      <NavBar/>
       <main>
          <div className='content topClass' id="home">Major Project Quick Kart - Home, This is the Home page fo the Quick Kart</div>
          <div className='content' id="about">Major Project Quick Kart - About</div>
          <div className='content' id="contact">Major Project Quick Kart - Contact</div>
          <div className='content' id="account">Major Project Quick Kart - Account</div>
      </main>
    </>
  );
}

export default App;