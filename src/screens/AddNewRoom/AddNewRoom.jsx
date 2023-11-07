import React from "react";
import "./style.css";

export const AddNewRoom = () => {
  return (
    <div className="add-new-room">
      <div className="add-room-button">
        <img className="icon-text" alt="Icon text" src="/img/icon-text.png" />
      </div>
      <div className="room-name-entry">
        <p className="room-name">
          <span className="text-wrapper">Room Name </span>
          <span className="span">*</span>
        </p>
        <div className="entry-box" />
      </div>
      <img className="close-button" alt="Close button" src="/img/close-button.svg" />
      <div className="div">Add New Room</div>
    </div>
  );
};
