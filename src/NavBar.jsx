import React from 'react';

function NavBar() {
  return (
    <>
      <div className='Brand'> 
        <div className='ico'>
          <input type="search" className='search' placeholder="Enter to Search..."/>
          <button type = "submit">Search</button>
        </div>
        
      </div>
      <div className='Nav'> 
        <a href="#home"><h3 className='nevigators'>Home</h3></a>
        <a href="#about"><h3 className='nevigators'>About</h3></a>
        <a href="#contact"><h3 className='nevigators'>Contact</h3></a>
        <a href="#account"><h3 className='nevigators'>Account</h3></a>
      </div>
    </>
  );
}

export default NavBar;