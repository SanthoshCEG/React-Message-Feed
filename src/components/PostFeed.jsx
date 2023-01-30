import React, { useState, useEffect, useRef } from "react";
import "../styles/SocialContent.scss";
import img from "../images/profile-logo.jpg";
import PostContextCard from "./PostContextCard";
import PostContextAttachment from "./PostContextAttachment";
import InputPostCard from "./InputPostCard";
import PostAttachmentPreview from "./PostAttachmentPreview";
import moment from "moment";
import uuid from "react-uuid";
import {USER_DATA} from "../DataFile";
import EmptyAlertPopup from "./EmptyAlertPopup";

function PostFeed() {
  const [inputFile, setInputFile] = useState("null");
  const [inputFileType,setInputFileType]=useState('null')
  const uploadFile = async (e) => {
    const getFile = e.target.files[0];
    const fileName= getFile.type;
    console.log(typeof fileName);
    const base64 = await convertBase64(getFile);
    setInputFile(base64);
    const extension=fileName.split('/').pop();
    console.log(extension)
    switch(extension){
      case 'jpeg':
        setInputFileType('image')
        break;
      case 'mp4':
        setInputFileType('video')
        break;
      case 'pdf':
        setInputFileType('pdf')
        break;

    }
    
    e.target.value = null;
  
  };
 

  const deleteImage = () => {
    setInputFile("null");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const [camPhoto, setCamPhoto] = useState("null");

  const [clicked, setClicked] = useState(false);

  const webCam = useRef(0);

  const webCapture = () => {
    setClicked(true);
  };

  const getCaptured = () => {
    setCamPhoto(webCam.current.getScreenshot());
    console.log(camPhoto);
    setClicked(false);
  };

  const getDeleted = () => {
    setClicked(false);
  };

  const deleteWebImage = () => {
    setCamPhoto("null");
    setClicked(true);
  };
  const [recordAudio,setRecordAudio]=useState('null')
  const [detectAudio,setDetectAudio]=useState(false)
  const getAudio=()=>{
    setDetectAudio(true)
    console.log('Get Audio called')
  }
  const postAudio=(recordedAudio)=>{
    console.log('called print Audio')
      setRecordAudio(recordedAudio)
  }
// console.log(recordAudio)
  const [postData, setPostData] = useState(USER_DATA);

  const [newPost, setNewPost] = useState([]);
  //set the new Post data to array
  const addItem = (newContent) => {
    const newCard = {
      key: uuid(),
      image: img,
      name: "Sandi Ash",
      designation: "FullStack Developer",
      date: moment().format(),
      content: newContent,
      getAttachment: inputFile,
      webPhoto: camPhoto,
      recordAudio:recordAudio,
      fileType:inputFileType
    };

    const listItems = [newCard, ...postData];
    setPostData(listItems);
    localStorage.setItem("messages", JSON.stringify(listItems));
  };
  // Get the Local storage items when re-render the component
  useEffect(() => {
    if (localStorage.getItem("messages")) {
      const storedData = JSON.parse(localStorage.getItem("messages"));
      setPostData(storedData);
    }
  }, []);
  const [showEmptyAlert,setEmptyAlert]=useState(false)

  // Submit the Post get from User Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.length<=0 && inputFile==='null' && camPhoto==='null' && recordAudio==='null'){
      console.log(showEmptyAlert);
       setEmptyAlert(true);
      }
      
    
    setInputFile("null");
    setInputFileType('null');
    setCamPhoto("null");
    setRecordAudio('null')
    setDetectAudio(false)
    addItem(newPost);
    setNewPost([]);
  };

  //delete the Post using Unique Key
  const handleDelete = (key) => {
    const listItems = postData.filter((item) => item.key !== key);
    setPostData(listItems);
    if (listItems.length > 0) {
      localStorage.setItem("messages", JSON.stringify(listItems));
    } else {
      localStorage.clear();
    }
  };


  return (

    <div className="feed-content">
      <div className="cards">
        {/*Get the  Input from user*/}
        <InputPostCard
          img={img}
          handleSubmit={handleSubmit}
          newPost={newPost}
          setNewPost={setNewPost}
          IsMessage={newPost}
          IsFile={inputFile}
          IsWebcam={camPhoto}
          IsAudio={recordAudio}
        />
        {/* {showEmptyAlert ? <EmptyAlertPopup showEmptyAlert={showEmptyAlert} setEmptyAlert={setEmptyAlert}/> :''} */}

        {/* Attachments added by user Section */}
        <PostContextAttachment webCapture={webCapture} uploadFile={uploadFile} getAudio={getAudio}/>

        {/* Show the Preview of the Attachment  */}
        <PostAttachmentPreview
          inputFile={inputFile}
          deleteImage={deleteImage}
          clicked={clicked}
          detectAudio={detectAudio}
          setDetectAudio={setDetectAudio}
          postAudio={postAudio}
          webCam={webCam}
          getCaptured={getCaptured}
          getDeleted={getDeleted}
          deleteWebImage={deleteWebImage}
          camPhoto={camPhoto}
          
        />
      </div>
      {/* Post the data got from user to the Chat Section */}
      {postData.map((feed) => {
        return (
          <PostContextCard
            key={feed.key}
            feeed={feed}
            content={feed.content}
            setAttachment={feed.getAttachment}
            webCamPhoto={feed.webPhoto}
            duration={moment(feed.date).fromNow()}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default PostFeed;
