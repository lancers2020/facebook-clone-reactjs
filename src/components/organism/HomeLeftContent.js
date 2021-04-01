import React, { useState } from 'react';
import Avatar from './../Avatar';
import Card from './../Card';
import ButtonTest from './../ButtonTest';
import Account from './../../sources/images/account.jpg';
import { FaHeartbeat } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdRecentActors } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { FaStore } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { GoGraph } from 'react-icons/go';
import { IoWater } from 'react-icons/io5';
import { FaCampground } from 'react-icons/fa';
import { IoIosAlert } from 'react-icons/io';
import { MdEventNote } from 'react-icons/md';
import { MdCreditCard } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import webDevGroup1 from './../../sources/images/philippinewebdevgroup.jpg';
import webDevGroup2 from './../../sources/images/Web Development.jpg';

function HomeLeftContent() {
  const [classname, setClassname] = useState('hiddenButtonsLeftBar');
  const [classname2, setClassname2] = useState('shownButtonsLeftBar');
  return (
    <div className='homeLeftContent'>
      <div className='accountLeftBar'>
        <Avatar image={Account} alt={'account'} size={40} radius={50} />
        <h4>Dave Cerio Limutin</h4>
      </div>
      <ButtonTest
        className='buttonsLeftBar'
        label='COVID-19 Information Center'
        iconLeft={<FaHeartbeat size={40} color='rgb(253, 102, 102)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Find Friends'
        iconLeft={<AiOutlineUsergroupAdd size={40} color='rgb(59, 209, 255)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Most Recent'
        iconLeft={<MdRecentActors size={40} color='rgb(59, 160, 255)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Favorites'
        iconLeft={<FaStar size={40} color='rgb(255, 219, 59)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Memories'
        iconLeft={<FaRegClock size={40} color='rgb(91, 176, 255)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Groups'
        iconLeft={<HiUserGroup size={40} color='rgb(91, 190, 255)' />}
      />
      <ButtonTest
        className='buttonsLeftBar'
        label='Marketplace'
        iconLeft={<FaStore size={40} color='rgb(59, 160, 255)' />}
      />
      <div
        className={classname2}
        onClick={() => {
          setClassname('shownButtonsLeftBar');
          setClassname2('hiddenButtonsLeftBar');
        }}
      >
        <ButtonTest
          className='seeMoreLess'
          label='See More'
          iconLeft={
            <AiOutlineDown size={20} color='black' className='seeMoreLessBtn' />
          }
        />
      </div>

      <ButtonTest
        className={classname}
        label='Ad Center'
        iconLeft={<HiSpeakerphone size={40} color='rgb(94, 91, 255)' />}
      />
      <ButtonTest
        className={classname}
        label='Ads Manager'
        iconLeft={<GoGraph size={40} color='rgb(94, 0, 255)' />}
      />
      <ButtonTest
        className={classname}
        label='Blood Donations'
        iconLeft={<IoWater size={40} color='red' />}
      />
      <ButtonTest
        className={classname}
        label='Campus'
        iconLeft={<FaCampground size={40} color='teal' />}
      />
      <ButtonTest
        className={classname}
        label='Crisis Response'
        iconLeft={<IoIosAlert size={40} color='rgb(51, 224, 210)' />}
      />
      <ButtonTest
        className={classname}
        label='Events'
        iconLeft={<MdEventNote size={40} color='rgb(241, 102, 102)' />}
      />
      <ButtonTest
        className={classname}
        label='Facebook Pay'
        iconLeft={<MdCreditCard size={40} color='rgb(0, 0, 0)' />}
      />
      <ButtonTest
        className={classname}
        label='Friend List'
        iconLeft={<FaUserFriends size={40} color='rgb(116, 102, 241)' />}
      />
      <div
        className={classname}
        onClick={() => {
          setClassname('hiddenButtonsLeftBar');
          setClassname2('shownButtonsLeftBar');
        }}
      >
        <ButtonTest
          className='seeMoreLess'
          label='See Less'
          iconLeft={
            <IoIosArrowUp size={20} color='black' className='seeMoreLessBtn' />
          }
        />
      </div>
      <div className='leftBarBreak'></div>
      <div className='shortcuts'>
        <div className='shotcutsLabel'>
          <h2>Your Shortcuts</h2>
          <div className='h3'>Edit</div>
        </div>
        <div className='shortcutsApp'>
          <div className='firstApp'>
            <img src={webDevGroup1} alt='first app' />
            <h3>Philippine Group of Web Developers</h3>
          </div>
          <div className='secondApp'>
            <img src={webDevGroup2} alt='second app' />
            <h3>Web Development (HTML, CSS, JavaScript, jQuery, AngularJS)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLeftContent;
