
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom'
function MenuList({menuList}) {
  return (
    <div>
      {menuList.map((menu)=>(
          <NavLink to={menu.path}>
            <div className='setting-item' key={menu.id}>
              <div className='sub'>
                <FontAwesomeIcon icon={menu.icon}  className='filefold'/>
                <p>{menu.text}</p>
              </div>
              <p>{menu.notifications}</p>
            </div>
           </NavLink>
          
        
      ))
      }
    </div>
  )
}

export default MenuList;
