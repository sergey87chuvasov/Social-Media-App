import { use } from 'react';
import Ad from './Ad';
import Birthdays from './Birthdays';
import FriendRequests from './FriendRequests';
import UserInfoCart from './UserInfoCart';
import UserMediaCart from './UserMediaCart';

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserInfoCart userId={userId} />
          <UserMediaCart userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size='md' />
    </div>
  );
};

export default RightMenu;
