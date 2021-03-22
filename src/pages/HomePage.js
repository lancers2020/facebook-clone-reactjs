import React from 'react';
import './../css/homepage.css';
import Nav from '../components/navComponents/Nav';
import HomeContent from '../components/organism/HomeContent';

function HomePage() {
  return (
    <body>
      <div className='container'>
        <Nav />
        <HomeContent />
      </div>
    </body>
  );
}

export default HomePage;
