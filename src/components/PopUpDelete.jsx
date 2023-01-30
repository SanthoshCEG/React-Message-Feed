import { React,useRef ,useCallback,useEffect} from "react";

function PopUpDelete({ showPopUp, handleDelete, setRemovePopUp, value}) {
  const removePopUp = () => {
    setRemovePopUp(!showPopUp);
  };
  const modalRef=useRef()
  const closeModal=e=>{
    if(modalRef.current===e.target){
      setRemovePopUp(!showPopUp)
    }
  }
  const keyPress=useCallback(e=>{
    if (e.key==='Escape' && showPopUp){
      setRemovePopUp(false)
    }
  },[setRemovePopUp,showPopUp])

  useEffect(()=>{
    console.log('first')
    document.addEventListener('keydown',keyPress);
    return ()=>{ document.removeEventListener('keydown',keyPress)
    console.log('called')
  }
  },[keyPress])


  return  (
    <div className="popup-parent" ref={modalRef} onClick={closeModal}>
      <div className="pop-up">
        <div className="text-card">Are you sure to delete this post?..</div>
        <div className="btn-control">
        <button
            className="btn-delete"
            onClick={() => {
              handleDelete(value);
            }}
          >
            delete post
          </button>
          <button className="btn-cancel" onClick={removePopUp}>
            Cancel
          </button>
          
          {/* <path d="M6.7,17.9v-3.7l4-1.8c0.4-0.2,0.4-0.7,0-0.9l-4-1.8V6.1L19.8,12L6.7,17.9z M23.7,11.5L5.4,3.3  c-0.1,0-0.1,0-0.2,0C5,3.3,4.7,3.5,4.7,3.8v5.9v4.8v5.9c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.1,0,0.2,0l18.3-8.2  C24.1,12.3,24.1,11.7,23.7,11.5z"></path> */}
        </div>
      </div>
    </div>
  );
}

export default PopUpDelete;
