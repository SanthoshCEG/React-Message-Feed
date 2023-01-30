import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function ShowButtons({ showMenuOption }) {
  const [showMenu, setShowMenu] = useState(true);
  const buttonClickHandler = () => {
    setShowMenu(!showMenu);
    showMenuOption(showMenu);
  };
  return (
    <div>
      <button className="btn" onClick={buttonClickHandler}>
        {showMenu ? "See more" : "See less"}
        <FontAwesomeIcon
          icon={showMenu ? faChevronDown : faChevronUp}
          className="filepad"
        />
      </button>
    </div>
  );
}

export default ShowButtons;
