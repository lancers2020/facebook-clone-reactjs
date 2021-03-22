import React from 'react';
import HomeFeeds from './HomeFeeds';
import HomeLeftContent from './HomeLeftContent';
import HomeRightContent from './HomeRightContent';

function HomeContent() {
  return (
    <div className='homeContent'>
      <HomeLeftContent />
      <HomeFeeds />
      <HomeRightContent />
    </div>
  );
}

export default HomeContent;
