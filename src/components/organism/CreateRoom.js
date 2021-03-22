import React from 'react';
import Card from './../Card';
import { MdVideoCall as Icon } from 'react-icons/md';
import { userstories } from './../../data/user-stories';
import Avatar from './../Avatar';

const Sample = () => {
  return (
    <div className='roomCta'>
      <div className='createRoomWrapper'>
        <div className='createRoomIconCta'>
          <Icon size='40px' color=' rgb(46, 46, 201)' className='icon' />
        </div>
        <div className='roomIconTextCta'>Create Room</div>
      </div>

      {userstories.map((item, i) => {
        return (
          <div className='createRoomAvatar' key={i}>
            <Avatar
              image={item.thumbnail}
              alt={item.name}
              size={50}
              type='online'
              radius={50}
            />
          </div>
        );
      })}
      {userstories.map((item, i) => {
        return (
          <div className='createRoomAvatar' key={i}>
            <Avatar
              image={item.thumbnail}
              alt={item.name}
              size={50}
              type='online'
              radius={50}
            />
          </div>
        );
      })}
      {userstories.map((item, i) => {
        return (
          <div className='createRoomAvatar' key={i}>
            <Avatar
              image={item.thumbnail}
              alt={item.name}
              size={50}
              type='online'
              radius={50}
            />
          </div>
        );
      })}
    </div>
  );
};
function CreateRoom() {
  return (
    <div>
      <Card
        contents={Sample()}
        color='black'
        border='2px'
        margin='25px auto 0 auto'
      />
    </div>
  );
}

export default CreateRoom;
