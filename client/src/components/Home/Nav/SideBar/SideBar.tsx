import React from 'react';
import './SideBar.scss';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import ProfileImage from '../../ProfileImage/ProfileImage';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../..';

const SideBar = () => {
  const userName = useSelector((state: IRootState) => state.user.profile.name);
  const isAuth = useSelector((state: IRootState) => state.user.isAuth);
  const imageUrl = useSelector(
    (state: IRootState) => state.user.profile.imageUrl
  );

  function handleClick(e: any) {
    const sidebar: any = document.getElementById('mobile-sidebar');
    const sidebarBg: any = document.getElementById('sidebar-bg');
    sidebar.style.width = '0px';
    sidebarBg.style.width = '0px';
    sidebarBg.style.height = '0px';
  }

  return (
    <>
      <div id='sidebar-bg' className='sidebar-bg' onClick={handleClick}></div>
      <div
        id='mobile-sidebar'
        className='mobile-sidebar-container'
        onClick={handleClick}
      >
        <a className='latest icons links' href='/home'>
          <HomeIcon></HomeIcon>
          <h1>Latest</h1>
        </a>
        <a className='followed icons links' href='/followed'>
          <ProfileIcon></ProfileIcon>
          <h1>Followed Tweets</h1>
        </a>

        <div className='login'>
          <ProfileImage imageUrl={imageUrl}></ProfileImage>
          <a className='btn btn-primary' href={isAuth ? '/logout' : '/login'}>
            {isAuth ? 'Logout' : 'Login'}
          </a>
          <h1>Welcome, {userName ? userName : 'Guest'}</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;
