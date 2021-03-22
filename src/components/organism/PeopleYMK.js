import React from 'react';
import Card from './../Card';
import Avatar from './../Avatar';
import { userstories } from './../../data/user-stories';
import ButtonTest from './../ButtonTest';
import { HiUserAdd } from 'react-icons/hi';

function Sample() {
  return (
    <div className='peopleCta'>
      <div className='peopleText'>
        <h2>People You May Know</h2>
      </div>
      <div className='peopleCardsScrollBar'>
        <div className='peopleCardsCta'>
          {userstories.map((item, i) => {
            return (
              <div className='peopleCards' key={i}>
                <div className='avatarPicturePYMK'>
                  <Avatar
                    image={item.thumbnail}
                    alt={item.name}
                    size={250}
                    radius={10}
                  />
                </div>
                <div className='peopleCardsBotPart'>
                  <h3>{item.name}</h3>
                  <div className='peopleAvatarComponent'>
                    <Avatar
                      image={item.thumbnail}
                      alt={item.name}
                      size={20}
                      radius={50}
                    />
                    <h4>1 mutual friend</h4>
                  </div>
                  <div
                    // style={{ width: '100%', alignSelf: 'center' }}
                    className='addFriendBtn'
                  >
                    <ButtonTest
                      label='Add Friend'
                      iconLeft={
                        <HiUserAdd size={25} color='rgb(55, 122, 247)' />
                      }
                      className='addFriendButtonContainer'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='crappy'>
        <ButtonTest label='See All' className='seeAllButtonContainer' />
      </div>
    </div>

    // <div>
    //   People You May Know
    //   <div
    //     style={{
    //       background: 'red',
    //       height: 410,
    //       paddingLeft: '10px',
    //       display: 'flex',
    //       overflowX: 'scroll',
    //     }}
    //   >
    //     {userstories.map((item, i) => {
    //       return (
    //         <div
    //           style={{
    //             width: 250,
    //             padding: '0 10px',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //           }}
    //         >
    //           <Avatar image={item.thumbnail} alt={item.name} size={250} />
    //           <div style={{ width: '100%', background: 'blue' }}>
    //             <h3>{item.name}</h3>
    //             <h4>1 mutual friend</h4>
    //             <div style={{ width: '100%', padding: '0 10px' }}>
    //               <ButtonTest
    //                 label='Add Friend'
    //                 backgroundColor='#e7f3ff'
    //                 padding='8px'
    //                 iconLeft={<HiUserAdd size={25} color='rgb(55, 122, 247)' />}
    //                 fontColor='rgb(55, 122, 247)'
    //                 //   width='90%'
    //                 // margin='0 12.5px 200px 12.5px'
    //                 height='25%'
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
function PeopleYMK() {
  return (
    <Card
      contents={Sample()}
      margin='25px auto 25px auto'
      border='2px'
      color='black'
      width='100%'
      //   height='600px'
    />
  );
}

export default PeopleYMK;
