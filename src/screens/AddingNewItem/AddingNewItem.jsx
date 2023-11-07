import React from "react";
import "./style.css";

export const AddingNewItem = () => {
  return (
    <div className="adding-new-item">
      <div className="add-item-button">
        <img className="icon-text" alt="Icon text" src="/img/icon-text.png" />
      </div>
      <div className="purchase-preference">
        <div className="text-wrapper">Purchase Preference</div>
        <div className="overlap-group">
          <div className="div">Online</div>
          <div className="text-wrapper-2">In-Person</div>
          <img className="dividing-line" alt="Dividing line" src="/img/dividing-line.svg" />
        </div>
      </div>
      <div className="link-to-item">
        <div className="text-wrapper">Link to Item</div>
        <div className="div-2" />
      </div>
      <div className="item-entry">
        <p className="item">
          <span className="span">Item </span>
          <span className="text-wrapper-3">*</span>
        </p>
        <div className="div-2" />
      </div>
      <img className="close-button" alt="Close button" src="/img/close-button.svg" />
      <div className="text-wrapper-4">Add New Item</div>
    </div>
  );
};
