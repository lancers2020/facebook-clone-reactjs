import React from 'react';

function HomeRightContentUpperPart({ image, label, link }) {
  return (
    <div>
      <div className='sponsorRightContentCta'>
        <img src={image} alt='Sponsor' />
        <div className='sponsorRightContentLabelCta'>
          <h4>{label}</h4>
          <h5>{link}</h5>
        </div>
      </div>
    </div>
  );
}
export default HomeRightContentUpperPart;
