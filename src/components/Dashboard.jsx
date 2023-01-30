import React,{useState} from 'react'
import '../styles/SocialHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faChevronRight,faBars} from '@fortawesome/free-solid-svg-icons'

function Dashborad({onClickButton}) {

  const [isHamburgerOpen,setIsHamburgerOpen]=useState(true);

  const hamburgerClick=()=>{
    setIsHamburgerOpen(!isHamburgerOpen)
    onClickButton(isHamburgerOpen);

  }
  return (
    <div className='content-header'>
      <FontAwesomeIcon icon={faArrowLeft} className='dashon'/>
      <div className='sub-header'>
        <div className='dash'>Dashborad</div>
        <FontAwesomeIcon icon={faChevronRight} size='1x'/>
        <h4>Social Feed</h4>
      </div>
      <FontAwesomeIcon icon={faBars} className='ham-menu' onClick={hamburgerClick}/>
    </div>
  )
}

export default Dashborad;
