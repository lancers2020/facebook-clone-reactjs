import React from 'react';
import { SiFacebook as Fb } from 'react-icons/si';
import { GoSearch } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import accountLogo from '../../sources/images/account.jpg';
import Avatar from './../Avatar';
import { Link } from 'react-router-dom';
// import { MdHome } from 'react-icons/md';

function Nav() {
  return (
    <div className='nav'>
      <div className='innerNav'>
        <div className='centerNav'></div>
        <div className='leftNav'>
          <div className='fbImageCta'>
            <Link to='/homepage'>
              <Fb color='#3578E5' size='50px' />
            </Link>
          </div>
          <div className='searchImageCta'>
            <div className='borderRadius'>
              <GoSearch color='grey' size='25px' className='searchSign' />
            </div>
          </div>
        </div>
        <div className='rightNav'>
          <div className='container'>
            <div className='innerContainer'>
              <AiOutlinePlus className='plusSign' size='30px' />
            </div>
            <div className='createNavHiddenElement'>Create</div>
          </div>
          <div className='container'>
            <div className='innerContainer'>
              <FaFacebookMessenger className='messengerSign' size='25px' />
            </div>
            <div className='messengerNavHiddenElement'>Messenger</div>
          </div>
          <div className='container'>
            <div className='innerContainer'>
              <MdNotifications className='notificationSign' size='30px' />
            </div>
            <div className='notificationNavHiddenElement'>Notifications</div>
          </div>
          <div className='container'>
            <div className='account'>
              <Avatar
                image={accountLogo}
                alt='profile'
                size={50}
                type='notification'
                radius={50}
              />
            </div>
            <div className='accountNavHiddenElement'>Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Nav() {
//   return (
//     <div className='nav'>
//       <div className='innerNav'>
//         <div className='leftNav'>
//           <div className='fbImageCta'>
//             <Fb color='#3B5998' size='55px' />
//           </div>
//           <div className='searchImageCta'>
//             <div className='borderRadius'>
//               <GoSearch color='grey' size='25px' />
//             </div>
//           </div>
//         </div>
//         <div className='centerNav'></div>
//         <div className='rightNav'></div>
//       </div>
//     </div>
//   );
// }

export default Nav;
