import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleMinus,faPause,faStop} from '@fortawesome/free-solid-svg-icons'
import Webcam from 'react-webcam'
import { ReactMediaRecorder } from 'react-media-recorder'
function PostAttachmentPreview({inputFile,postAudio,clicked,camPhoto,webCam,deleteImage,deleteWebImage,getCaptured,getDeleted,detectAudio,setDetectAudio}) {
    const webFrame={
        width:200,
        height:200
      }
      // console.log(detectAudio)
  const [audio,setAudio]=useState('null')
  return (
    <div>
      <div className={`${inputFile!=='null' && 'attachment-preview'} `}>
          {(inputFile!=="null" ) ? <><img src={inputFile} width="150px" alt="" />
          <FontAwesomeIcon icon={faCircleMinus} className='delete' onClick={deleteImage} size='4xs'/></>:''}
      </div>
        <div className={`${clicked && 'webcam-preview'}`}>
          {clicked ?<><Webcam ref={webCam} videoConstraints={webFrame} width='250px'/>
          <div><button type='submit' onClick={getCaptured} className='btn1'>Click</button>
          <button type='delete' className='btn2' onClick={getDeleted}>remove</button></div></>
          :''}
          {camPhoto!=="null" ?<div className='attachment-preview'><img src={camPhoto} width='150px' alt='' className='photo'/>
          <FontAwesomeIcon icon={faCircleMinus} className='delete' onClick={deleteWebImage}/></div>:''}
        </div>
        
        {detectAudio?<ReactMediaRecorder  
            onStop={(mediaBlobUrl,blob)=>{
              const audioFileReader = new FileReader();
              audioFileReader.readAsDataURL(blob);

              audioFileReader.onload = () => {
                const audioConvertBase64=audioFileReader.result;
                setAudio(audioConvertBase64)
          }
        }}
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className='audio-box'>
          {(status!=='idle')?<p>{status}</p>:''}
          <div className='record-flex'>
            <button className='post-record' onClick={()=>postAudio(audio)}>PostAudio</button>
            <button className='cancel-record' onClick={()=>{setDetectAudio(false)}}>Cancel</button>
          </div>
          <div className='record-flex'>
          <button onClick={startRecording} className='record-btn'>Start Recording <FontAwesomeIcon icon={faPause} className='pad-fa'/></button>
          <button onClick={stopRecording} className='stop-btn'>Stop Recording<FontAwesomeIcon icon={faStop} className='pad-fa'/></button></div>
          <audio src={mediaBlobUrl} controls autoPlay  />
          
        </div>
        
      )}
    />:''}
    
    </div>
  )
  
}

export default PostAttachmentPreview;
