import React from 'react'

function EmptyAlertPopup({showEmptyAlert,setEmptyAlert}) {
    const clearEmptyAlert=()=>{
        setEmptyAlert(false)
    }
    console.log('called')
  return (
    <div className='empty-alert-box'>
        <p className='alert-message'>Please give some Valid Input 😡😡 !!</p>
        <button className='close-alert' onClick={clearEmptyAlert}>Ok</button>
    </div>
  )
}

export default EmptyAlertPopup
