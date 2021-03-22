import React from 'react';
import Card from './../Card';
import Input from './../Input';
import { RiVideoAddFill as Video } from 'react-icons/ri';
import { MdPhotoLibrary as Photo } from 'react-icons/md';
import { BiHappyAlt as Emoji } from 'react-icons/bi';
import Avatar from './../Avatar';
function Status() {
  const profilePic =
    'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/155786271_358346502172938_4862896298222628020_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEuTdRbUoh2CBwoeNT2tAVObxMGPF3th4RvEwY8Xe2HhJDCEgYhotKnoiDhFnhxacpcmWIGlrhetDPCcTM01Tie&_nc_ohc=i5e0-WIjeG8AX8TFyZ0&_nc_ht=scontent.fceb2-1.fna&tp=27&oh=26f2682feba50b79b26839e4ceef8f12&oe=607067AD';
  return (
    <div className='statusCta'>
      <div className='profileAndInput'>
        <div className='createStatusAvatar'>
          <Avatar
            image={profilePic}
            alt='Profile Picture'
            size={50}
            type='default'
            radius={50}
          />
        </div>

        <Input
          width='89%'
          lineHeight='60px'
          borderRadius='50px'
          margin='2px 0px 2px 20px'
          background='#f0f2f5'
          placeholder="What's on your mind, Aris?"
          letterSpacing='2px'
        />
      </div>

      <div className='statusBreak'></div>
      <div className='addOns'>
        <a href='http://google.com' className='liveVideo'>
          <div className='liveVidCta'>
            <Video size='30px' color='rgb(245, 85, 85)' />
          </div>
          <div className='liveVidTextCta'>Live Video</div>
        </a>
        <a href='http://google.com' className='photoVideo'>
          <div className='photoVidCta'>
            <Photo size='30px' color='rgb(94, 196, 94)' />
          </div>
          <div className='photoVidTextCta'>Photo/Video</div>
        </a>
        <a href='http://google.com' className='feelingActivity'>
          <div className='feelActCta'>
            <Emoji size='30px' color='orange' />
          </div>
          <div className='feelActTextCta'>Feeling/Activity</div>
        </a>
      </div>
    </div>
  );
}

function CreateStatus() {
  return (
    <div>
      <Card
        contents={Status()}
        color='black'
        border='2px'
        margin='80px auto 0px auto'
      />
    </div>
  );
}

export default CreateStatus;
