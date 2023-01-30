import React,{useState} from 'react'
import img from '../images/profile-logo.jpg'
import '../styles/SocialProfile.scss'
import {MENU_OPTIONS,RECENT_MENU_OPTIONS} from '../DataFile'
import MenuList from './MenuList'
import ShowButtons from './ShowButtons'

function SideMenu(props) {
  const [isShowMenu,setIsShowMenu]=useState(false);
  const [isShowRecent,setIsShowRecent]=useState(false);
  const showMenuOption=(showOption)=>{
    setIsShowMenu(showOption);
  }
  const showRecentOption=(showOption)=>{
    setIsShowRecent(showOption);
  }
 
  return (
    <div className={`content-profile ${props.onClickMenu && `activeClass`}`}>
      <div className='profile'>
        <img src={img} className='profile-img' alt=''/>
        <h4>Sandi Ash</h4>
      </div>
      <div className='profile-settings'>
        <MenuList menuList={isShowMenu ?MENU_OPTIONS:MENU_OPTIONS.slice(0,7)}/>   
        <ShowButtons showMenuOption={showMenuOption} />
        
        <h4 className='profile'>Recently Added:</h4>
        
        <MenuList menuList={isShowRecent ?RECENT_MENU_OPTIONS:RECENT_MENU_OPTIONS.slice(0,3)}/>
        <ShowButtons showMenuOption={showRecentOption}/>
      </div>
    </div>
  )
}

export default SideMenu;
