import React from 'react';
import { userstories } from './../../data/user-stories';
import Avatar from './../Avatar';
import { HiOutlineArrowRight } from 'react-icons/hi';

function MyDayCard() {
  return (
    <div className='mydayContainer'>
      {userstories.map((item, i) => {
        return (
          <div className='mydayCard' key={i}>
            <img className='img' src={item.thumbnail} alt='thumbnail'></img>
            <div className='mydayUsername'>{item.name}</div>
            <div className='mydayUserProfilePic'>
              <Avatar image={item.thumbnail} alt={item.name} size={50} />
            </div>
          </div>
        );
      })}
      <div className='mydayArrow'>
        <HiOutlineArrowRight size='25px' className='hiOutlineArrowRight' />
      </div>
    </div>
  );
}

export default MyDayCard;
