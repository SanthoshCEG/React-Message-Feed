import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import SideMenu from './components/SideMenu'
import RouterPanel from './components/RouterPanel'
import PostFeed from'./components/PostFeed'
import './styles/JSXcommonStyles.scss'

function App() {
  const [ACTIVE_PROFILE,setACTIVE_PROFILE]=useState(false)
  const activeprofile=(active)=>{
    setACTIVE_PROFILE(active);
    console.log(ACTIVE_PROFILE)
  }
  return (
    <>
    <Dashboard onClickButton={activeprofile}/>
    <div className='content-divider'>
      <SideMenu onClickMenu={ACTIVE_PROFILE}/>
      <RouterPanel/>
    </div>
      
    </>
   
      
  )
}

export default App
