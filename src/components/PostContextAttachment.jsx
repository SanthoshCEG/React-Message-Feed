import {
  faVideo,
  faMicrophone,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import {React} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostContextAttachment({webCapture,uploadFile,getAudio}) {
 
  return (
    <div className="attachments">
      <label htmlFor="upload" className="attachment-content">
        <FontAwesomeIcon icon={faVideo} className="icons" />
        <p>Any attachment </p>
        <input
          type="file"
          id="upload"
          placeholder="attach-file"
          className="attach-but"
          onChange={uploadFile}
        />
      </label>

      <div className="attachment-content">
        <FontAwesomeIcon icon={faCamera} className="icons" />
        <p onClick={webCapture}> Capture it</p>
      </div>
      <div className="attachment-content">
        <FontAwesomeIcon icon={faMicrophone} className="icons" />
        <p onClick={getAudio}>Say it</p>
      </div>
    </div>
  );
}

export default PostContextAttachment;
