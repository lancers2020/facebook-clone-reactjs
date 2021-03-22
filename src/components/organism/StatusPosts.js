import React from 'react';
import Avatar from './../Avatar';
import ButtonTest from './../ButtonTest';
import Card from './../Card';
import { userstories } from './../../data/user-stories';
import { userstatus } from './../../data/user-status';
import Reactions from './../Reactions';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentAlt as Comment } from 'react-icons/fa';
import { RiShareForwardLine as Share } from 'react-icons/ri';

function Sample({
  account,
  reactionCounts,
  commentCounts,
  shareCounts,
  backgroundColor,
  backgroundImage,
}) {
  return (
    <div className='statusPostsCta'>
      <div className='statusPostsTopPart'>
        <div className='avatarNameDateStatusPosts'>
          <div className='avatarBorderStatusPosts'>
            <Avatar
              image={userstories[account].thumbnail}
              size={50}
              radius={50}
            />
          </div>
          <div className='nameDateStatusPosts'>
            <div className='nameStatusPosts'>{userstories[account].name}</div>
            <div className='dateStatusPosts'>
              {userstatus[account].date} at {userstatus[account].time}
            </div>
          </div>
        </div>
        <div className='optionsStatusPosts'>...</div>
      </div>
      <div
        className='statusPostsMidPart'
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImage,
        }}
      >
        <div className='statusPostsCaption'>{userstatus[account].caption}</div>
      </div>
      <div className='statusPostsBotPart'>
        <div className='displayLikeCommentShareCta'>
          <div className='emojiReactionsCta'>
            <Reactions emoji='haha' className='reactionFirstEmoji' />
            <Reactions emoji='like' className='reactionSecondEmoji' />
            <Reactions emoji='love' className='reactionThirdEmoji' />
            <div className='emojiReactionsCountCta'>{reactionCounts}</div>
          </div>
          <div className='commentsSharesCta'>
            <div className='statusPostsCommentCount'>
              {commentCounts} Comments
            </div>
            <div className='statusPostsSharesCount'>{shareCounts} Shares</div>
          </div>
        </div>
        <div className='break'></div>
        <div className='likeCommentShareCta'>
          <ButtonTest
            className='buttonStatusPosts'
            label='Like'
            iconLeft={<BiLike size='30px' color='grey' />}
          />
          <ButtonTest
            className='buttonStatusPosts'
            label='Comment'
            iconLeft={<Comment size='25px' color='grey' />}
          />
          <ButtonTest
            className='buttonStatusPosts'
            label='Share'
            iconLeft={<Share size='35px' color='grey' />}
          />
        </div>
      </div>
    </div>
  );
}

function StatusPost({
  account,
  commentCounts,
  shareCounts,
  reactionCounts,
  backgroundColor,
  backgroundImage,
}) {
  return (
    <Card
      contents={
        <Sample
          account={account}
          commentCounts={commentCounts}
          shareCounts={shareCounts}
          reactionCounts={reactionCounts}
          backgroundColor={backgroundColor}
          backgroundImage={backgroundImage}
        />
      }
      margin='25px auto 25px auto'
      border='2px'
      color='black'
      width='100%'
    />
  );
}

export default StatusPost;
