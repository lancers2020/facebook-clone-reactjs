import React from 'react';
import { BiLike } from 'react-icons/bi';
import { IoHeartCircleSharp as Heart } from 'react-icons/io5';
import { FaLaughSquint as Laugh } from 'react-icons/fa';

function Reactions({ emoji, className }) {
  if (emoji === 'like') {
    return (
      <div className={className}>
        <BiLike size={25} color='#3578e5' />
      </div>
    );
  } else if (emoji === 'love') {
    return (
      <div className={className}>
        <Heart size={27} color='rgb(253, 123, 123)' />
      </div>
    );
  } else if (emoji === 'haha') {
    return (
      <div className='reactionsHahaCta'>
        <div className={className}>
          <Laugh size={22} color='orange' />
          {/* <div className='imgReactions'>😆</div> */}
        </div>
      </div>
    );
  }
}
export default Reactions;
