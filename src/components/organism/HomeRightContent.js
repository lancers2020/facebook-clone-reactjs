import React from 'react';
import SponsorSmart from './../../sources/images/sponsorSmart.jfif';
import SponsorLazada from './../../sources/images/sponsorLazada.png';
import HomeRightContentUpperPart from './HomeRightContentUpperPart';
import Avatar from './../Avatar';
import { userstories } from './../../data/user-stories';
import Card from './../Card';
import { MdVideoCall as Icon } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';

function SampleContactsPopUp({ i }) {
  return (
    <div className='contactsPopUpCta' key={i}>
      <div className='contactsPopUpAvatar'>
        <Avatar
          image={userstories[i].thumbnail}
          alt={userstories[i].name}
          size={120}
          type='online'
          radius={60}
        />
      </div>
      <div className='contactsPopUpDetails'>Details</div>
    </div>
  );
}

function HomeRightContent() {
  return (
    <div className='homeRightContent'>
      <div className='upperPartRightContentCta'>
        <h2> Sponsored</h2>
        <HomeRightContentUpperPart
          image={SponsorSmart}
          label='Prepaid Pocket Wifi Advance'
          link='smart.com.ph'
        />
        <HomeRightContentUpperPart
          image={SponsorLazada}
          label='Shop Offline Online'
          link='Lazada.com.ph'
        />
      </div>
      <div className='borderBottomMidHomeContent'></div>
      <div className='lowerPartRightContentCta'>
        <div className='contactHeader'>
          <div className='contactLabel'>Contacts</div>
          <div className='contactIcons'>
            <div className='contactIconNewRoom'>
              <Icon color='grey' size='30px' />
            </div>
            <div className='contactIconSearch'>
              <GoSearch size='25px' color='grey' />
            </div>
            <div className='contactIconOptions'>...</div>
          </div>
        </div>
        {userstories.map((item, i) => {
          return (
            <div className='tempSample'>
              <div className='lowerPartRightContentContacts' key={i}>
                <div className='imageAvatarLowerPartCta'>
                  <Avatar
                    image={item.thumbnail}
                    alt={item.name}
                    size={40}
                    type='online'
                    radius={50}
                  />
                </div>

                <div className='labelAvatarLowerPartCta'>{item.name}</div>
              </div>
              <div className='lowerPartRightContentHidden'>
                <Card
                  padding={10}
                  contents={<SampleContactsPopUp i={i} />}
                  width={'100%'}
                  height={'100%'}
                  boxShadow={'0 0 8px 1px lightgrey'}
                />
              </div>
            </div>
          );
        })}
        {userstories.map((item, i) => {
          return (
            <div className='tempSample'>
              <div className='lowerPartRightContentContacts' key={i}>
                <div className='imageAvatarLowerPartCta'>
                  <Avatar
                    image={item.thumbnail}
                    alt={item.name}
                    size={40}
                    type='online'
                    radius={50}
                    className='avatarDotCta'
                  />
                </div>

                <div className='labelAvatarLowerPartCta'>{item.name}</div>
              </div>
              <div className='lowerPartRightContentHidden'>
                <Card
                  padding={10}
                  contents={<SampleContactsPopUp i={i} />}
                  width={'100%'}
                  height={'100%'}
                  boxShadow={'0 0 8px 1px lightgrey'}
                />
              </div>
            </div>
          );
        })}
        {userstories.map((item, i) => {
          return (
            <div className='tempSample'>
              <div className='lowerPartRightContentContacts' key={i}>
                <div className='imageAvatarLowerPartCta'>
                  <Avatar
                    image={item.thumbnail}
                    alt={item.name}
                    size={40}
                    type='online'
                    radius={50}
                    className='avatarDotCta'
                  />
                </div>

                <div className='labelAvatarLowerPartCta'>{item.name}</div>
              </div>
              <div className='lowerPartRightContentHidden'>
                <Card
                  padding={10}
                  contents={<SampleContactsPopUp i={i} />}
                  width={'100%'}
                  height={'100%'}
                  boxShadow={'0 0 8px 1px lightgrey'}
                />
              </div>
            </div>
          );
        })}
        {userstories.map((item, i) => {
          return (
            <div className='tempSample'>
              <div className='lowerPartRightContentContacts' key={i}>
                <div className='imageAvatarLowerPartCta'>
                  <Avatar
                    image={item.thumbnail}
                    alt={item.name}
                    size={40}
                    type='online'
                    radius={50}
                  />
                </div>

                <div className='labelAvatarLowerPartCta'>{item.name}</div>
              </div>
              <div className='lowerPartRightContentHidden'>
                <Card
                  padding={10}
                  contents={<SampleContactsPopUp i={i} />}
                  width={'100%'}
                  height={'100%'}
                  boxShadow={'0 0 8px 1px lightgrey'}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeRightContent;
