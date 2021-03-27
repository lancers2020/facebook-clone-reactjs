import React from 'react';
import SponsorSmart from './../../sources/images/sponsorSmart.jfif';
import SponsorLazada from './../../sources/images/sponsorLazada.png';

function HomeRightContent() {
  return (
    <div className='homeRightContent'>
      <div className='upperPartRightContentCta'>
        <h2> Sponsored</h2>
        <div className='sponsorRightContentCta'>
          <img src={SponsorSmart} alt='Sponsor' />
          <div className='sponsorRightContentLabelCta'>
            <h4>Prepaid Pocket Wifi Advance</h4>
            <h5>Smart.com.ph</h5>
          </div>
        </div>
        <div className='sponsorRightContentCta'>
          <img src={SponsorLazada} alt='Sponsor' />
          <div className='sponsorRightContentLabelCta'>
            <h4>Shop Online Offline</h4>
            <h5>Lazada.com.ph</h5>
          </div>
        </div>
      </div>
      <div className='lowerPartRightContentCta'>this is the lower part</div>
    </div>
  );
}

export default HomeRightContent;
