import React from 'react'
import '../styles/RouterPanel.scss'

import {Routes,Route} from 'react-router-dom'
import {ROUTE_PATH} from '../PathComponent'
function RouterPanel() {
  return (
    <>
    <div className='router-panel'>
        {/* <img src={img} width='100%' height='100%'></img> */}
    </div>

    {ROUTE_PATH.map((route)=>(
       
    <Routes>
        <Route path={route.path} element={route.component}/>
    </Routes>
    ))}
    </>
    
    
  )
}

export default RouterPanel
