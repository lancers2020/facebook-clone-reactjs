import React from 'react';
import HomeFeeds from './HomeFeeds';
import HomeLeftContent from './HomeLeftContent';
import HomeRightContent from './HomeRightContent';

function HomeContent() {
  return (
    <div className='homeContent'>
      <div className='homeLeftContentParentCta'>
        <HomeLeftContent />
      </div>
      <div className='homefeedsParentCta'>
        <HomeFeeds />
      </div>
      <div className='homeRightContentParentCta'>
        <HomeRightContent />
      </div>
    </div>
  );
}

export default HomeContent;
