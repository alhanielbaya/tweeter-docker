import React from 'react';
import {
  useSocket,
  useFollowedUsers
} from '../../../custom-hooks/custom-hooks';
import { useSelector } from 'react-redux';
import { IRootState } from '../../..';

const Follow = (props: { uidToFollow: number; uid: number | undefined }) => {
  const isAuth = useSelector((state: IRootState) => state.user.isAuth);
  const socket = useSocket();
  const followedUsers = useFollowedUsers();

  const { uid, uidToFollow } = props;

  function handleFollow(e: any) {
    socket.emit('follow user', { uidToFollow, uid });
  }
  function handleUnFollow(e: any) {
    socket.emit('unfollow user', { uidToUnFollow: uidToFollow, uid });
  }

  return (
    <>
      {isAuth ? (
        <>
          {followedUsers.includes(uidToFollow) ? (
            <div className='follow' onClick={(e: any) => handleUnFollow(e)}>
              <i className='icon icon-cross text-primary'></i>
              <p>Unfollow.</p>
            </div>
          ) : (
            <div className='follow' onClick={(e: any) => handleFollow(e)}>
              <i className='icon icon-people text-primary'></i>
              <p>Follow.</p>
            </div>
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Follow;
