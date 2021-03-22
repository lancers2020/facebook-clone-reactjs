import React from 'react';
import MyDayCard from './MyDayCard';
import CreateStatus from './CreateStatus';
import CreateRoom from './CreateRoom';
import PeopleYMK from './PeopleYMK';
import StatusPosts from './StatusPosts';

//this is our main body, both the left and right content are positioned absolute, this homeFeeds
//has no particular position.
function HomeFeeds() {
  return (
    <div className='homeFeeds'>
      <MyDayCard />
      <CreateStatus />
      <CreateRoom />
      <PeopleYMK />
      <StatusPosts
        account={2}
        reactionCounts={'1.2M'}
        shareCounts={'586k'}
        commentCounts={'100k'}
        backgroundImage='linear-gradient(to bottom right, blue, violet)'
      />
      <StatusPosts
        account={3}
        reactionCounts={'1.7k'}
        shareCounts={160}
        commentCounts={205}
        backgroundColor='rgb(253, 123, 123)'
      />
      <StatusPosts
        account={0}
        reactionCounts={200}
        commentCounts={108}
        backgroundColor={'skyblue'}
        shareCounts={2}
      />
      <StatusPosts
        account={1}
        reactionCounts={'308k'}
        commentCounts={'100k'}
        shareCounts={'7k'}
        backgroundImage={
          'linear-gradient(to bottom right, rgb(105, 255, 92), rgb(255, 230, 0))'
        }
      />
    </div>
  );
}

export default HomeFeeds;
