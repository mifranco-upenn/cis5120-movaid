import React from "react";
import "./style.css";

export const DetailedItemView = () => {
  return (
    <div className="detailed-item-view">
      <div className="update-item-button">
        <img className="icon-text" alt="Icon text" src="/img/icon-text.png" />
      </div>
      <div className="delete-item-button">
        <div className="overlap-group">
          <img className="delete-icon" alt="Delete icon" src="/img/delete-icon.svg" />
          <div className="text-wrapper">Delete Item</div>
        </div>
      </div>
      <div className="item-availability">
        <div className="div">Availability</div>
        <p className="target-mi-away">
          <span className="span">Target: </span>
          <span className="text-wrapper-2">3 mi. away | </span>
          <span className="text-wrapper-3">Online</span>
        </p>
        <p className="walmart-mi-away">
          <span className="span">Walmart: </span>
          <span className="text-wrapper-2">8.6 mi. away | </span>
          <span className="text-wrapper-3">Online</span>
        </p>
        <p className="amazon-link">
          <span className="span">Amazon:</span>
          <span className="text-wrapper-2">&nbsp;</span>
          <span className="text-wrapper-3">Link</span>
        </p>
      </div>
      <p className="purchase-preference">
        <span className="text-wrapper-4">Purchase Preference: </span>
        <span className="text-wrapper-5">In-person</span>
      </p>
      <img className="close-button" alt="Close button" src="/img/close-button.svg" />
      <div className="header">Blender</div>
    </div>
  );
};
