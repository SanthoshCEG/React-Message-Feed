import {React,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import PopUpDelete from'./PopUpDelete'

function PostContextCard({feeed,duration,content,setAttachment,webCamPhoto,handleDelete} ) {
  const {key,image, name, designation,recordAudio,fileType} = feeed;
  const [showPopUp,setShowPopUp]=useState(false)

  const activePopUp=()=>{
      setShowPopUp(!showPopUp)
  }

  return (
    
    <>
    {setAttachment!=='null' || content.length>0 || webCamPhoto!=='null' ||recordAudio!=='null'?
    <div className="card-content" id={feeed.key}>
      {showPopUp?<PopUpDelete  showPopUp={showPopUp} setRemovePopUp={setShowPopUp} handleDelete={handleDelete} value={key} />:''}
      <div className="about">
        <div className="about-person">
          <img src={image} className="profile-img" alt="userImage" />
          <div>
            <h4 className="headline-two">{name}</h4>
            <p className="p-mar">{designation}</p>
            <p className="p-mar">{duration}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faDeleteLeft} className="delete-left" onClick={activePopUp} />
        
      </div>
      <div className="message-content">
        <pre className='body-large'>{content}</pre>
        {(setAttachment!=='null' && fileType==='image')?<img src={setAttachment} className='img-resize' alt=''></img>:''}
        {(setAttachment!=='null' && fileType==='video')?<video src={setAttachment} controls/>:''}
        {(setAttachment!=='null' && fileType==='pdf')?<a href={setAttachment} download>document.pdf</a> :''}
        {webCamPhoto!=='null' ? <img src={webCamPhoto} className='img-resize' alt=''/>:''}
        {recordAudio!=='null'?<audio  src={recordAudio} controls/>:''}
      </div>
      
    </div> 
    :''}
  </>
  )
}


export default PostContextCard;




