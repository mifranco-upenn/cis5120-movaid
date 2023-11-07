import React, { useState } from "react";
import "./style.css";
import "../AddingNewItem/style.css"
import "../AddNewRoom/style.css"
import "../DetailedItemView/style.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

export const PrototypePurchase = () => {

  const [livingRoomItem, setLivingRoomItem] = useState('')
  const [kitchenItem, setKitchenItem] = useState('')
  const [bathroomItem, setBathroomItem] = useState('')

  const [roomName, setRoomName] = useState('')

  return (
    <div className="prototype-purchase">
      <div className="add-room-button">
        <Popup trigger={<img className="add-room-icon-text" alt="Add room icon text" src="/img/add-room-icon-text.png" />} modal nested contentStyle={{width: '393px'}}>
          {close => (
            <div className="add-new-room">
              <div className="add-room-button">
                <img className="icon-text" alt="Icon text" src="/img/icon-text.png" onClick={close}/>
              </div>
              <div className="room-name-entry">
                <p className="room-name">
                  <span className="text-wrapper">Room Name </span>
                  <span className="span">*</span>
                </p>
                <input className="entry-box" type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)}/>
              </div>
              <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
              <div className="div">Add New Room</div>
            </div>
          )}
        </Popup>
        
      </div>
      <div className="customizable-widget">
        <div className="overlap-group">
          <div className="checklist-items">
            {livingRoomItem &&
              <div className="checklist-item">
                <div className="text-wrapper">{livingRoomItem}</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
            }
            
            <div className="div">
              <div className="text-wrapper">Coffee Table</div>
              <img className="img" alt="Circle" src="/img/circle.png" />
            </div>
            <div className="checklist-item-2">
              <div className="text-wrapper-2">Office Chair</div>
              <img className="circle" alt="Circle" src="/img/circle.png" />
            </div>
            <div className="checklist-item-3">
              <div className="text-wrapper-2">Desk</div>
              <img className="circle" alt="Circle" src="/img/circle.png" />
            </div>
            <div className="checklist-item-4">
              <div className="text-wrapper-2">Couch</div>
              <img className="circle" alt="Circle" src="/img/circle.png" />
            </div>
          </div>
          <img className="view-more-button" alt="View more button" src="/img/view-more-button-2.svg" />
        </div>
        <Popup trigger={<div className="add-item">Add item &gt;</div>} modal nested contentStyle={{width: '393px'}}>
          {close => (
            <div className="adding-new-item">
              <div className="add-item-button">
                <img className="icon-text" alt="Icon text" src="/img/icon-text.png" onClick={close}/>
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
                <input className="div-2" type="text" value={livingRoomItem} onChange={(e) => setLivingRoomItem(e.target.value)}/>
              </div>
              <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
              <div className="text-wrapper-4">Add New Item</div>
            </div>
          )}
        </Popup>
        
        <div className="text-wrapper-3">Living Room</div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-2">
            <div className="widget-box" />
            <div className="checklist-items-2">
              {bathroomItem &&
                <div className="checklist-item-5">
                  <div className="text-wrapper">{bathroomItem}</div>
                  <img className="circle" alt="Circle" src="/img/circle.png" />
                </div>
              }
              
              <div className="checklist-item-6">
                <div className="text-wrapper">Toiletries</div>
                <img className="img" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-7">
                <div className="text-wrapper-2">Toilet Paper</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-8">
                <div className="text-wrapper-2">Bath Rug</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-9">
                <div className="text-wrapper-2">Towels</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
            </div>
            <img className="view-more-button-2" alt="View more button" src="/img/view-more-button-1.svg" />
            <div className="text-wrapper-3">Bathroom</div>
          </div>
          <Popup trigger={<div className="add-item-2">Add item &gt;</div>} modal nested contentStyle={{width: '393px'}}>
            {close => (
              <div className="adding-new-item">
                <div className="add-item-button">
                  <img className="icon-text" alt="Icon text" src="/img/icon-text.png" onClick={close}/>
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
                  <input className="div-2" type="text" value={bathroomItem} onChange={(e) => setBathroomItem(e.target.value)}/>
                </div>
                <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
                <div className="text-wrapper-4">Add New Item</div>
              </div>
            )}
          </Popup>
          
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap">
          <div className="overlap-2">
            <div className="widget-box" />
            <div className="checklist-items-3">
              {kitchenItem &&
                <div className="checklist-item-10">
                  <div className="text-wrapper-4">{kitchenItem}</div>
                  <img className="circle" alt="Circle" src="/img/circle.png" />
                </div>
              }
              
              <div className="checklist-item-11">
                <div className="text-wrapper-4">Pots and Pans</div>
                <img className="img" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-12">
                <Popup trigger={<div className="text-wrapper-5">Blender</div>} modal nested contentStyle={{width: '393px'}}>
                  {close => (
                    <div className="detailed-item-view">
                      <div className="update-item-button">
                        <img className="icon-text" alt="Icon text" src="/img/icon-text.png" onClick={close}/>
                      </div>
                      <div className="delete-item-button" onClick={close}>
                        <div className="overlap-group">
                          <img className="delete-icon" alt="Delete icon" src="/img/delete-icon.svg"/>
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
                      <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
                      <div className="header">Blender</div>
                    </div>
                  )}
                </Popup>
                
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-13">
                <div className="text-wrapper-2">Knife Set</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-14">
                <div className="text-wrapper-5">Utensils</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
            </div>
            <img className="view-more-button-2" alt="View more button" src="/img/view-more-button.svg" />
            <div className="text-wrapper-6">Kitchen</div>
          </div>
          <Popup trigger={<div className="add-item-2">Add item &gt;</div>} modal nested contentStyle={{width: '393px'}}>
            {close => (
              <div className="adding-new-item">
                <div className="add-item-button">
                  <img className="icon-text" alt="Icon text" src="/img/icon-text.png" onClick={close}/>
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
                  <input className="div-2" type="text" value={kitchenItem} onChange={(e) => setKitchenItem(e.target.value)}/>
                </div>
                <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
                <div className="text-wrapper-4">Add New Item</div>
              </div>
            )}
          </Popup>
          
        </div>
      </div>
      <header className="header">
        <div className="personalised">Things to Purchase</div>
      </header>
      <div className="navigation-bar-wrapper">
        <div className="navigation-bar">
          <div className="overlap-3">
            <Link to="/todo">
              <div className="to-do">
                <div className="text-wrapper-7">To-do</div>
                <img className="todo-list" alt="Todo list" src="/img/todo-list.svg" />
              </div>
            </Link>
            
            <Link to="/plan">
              <div className="to-plan">
                <div className="text-wrapper-7">Plan</div>
                <img className="calendar" alt="Calendar" src="/img/calendar.svg" />
              </div>
            </Link>
            
            <Link to="/list">
              <div className="purchase">
                <div className="text-wrapper-7">Purchase</div>
                <img className="purchase-bag" alt="Purchase bag" src="/img/purchase-bag.svg" />
              </div>
            </Link>
            
            <Link to="/city">
              <div className="get-around">
                <div className="get-around-2">Get Around</div>
                <img className="map" alt="Map" src="/img/map.svg" />
              </div>
            </Link>
          </div>
          <Link to="/">
            <img className="home" alt="Home" src="/img/home.svg" />
          </Link>
          
        </div>
      </div>
      <div className="budget-tracker">
        <div className="text-wrapper-8">Overall Budget Tracker</div>
        <div className="budget-tracker-2">
          <div className="current-level">
            <div className="overlap-4">
              <div className="readout-background">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
                </div>
              </div>
              <div className="text-wrapper-9">$1,700</div>
            </div>
          </div>
          <div className="budget-slider">
            <div className="overlap-5">
              <div className="overlap-6">
                <img className="background-line" alt="Background line" src="/img/background-line.svg" />
                <img className="foreground-bold-line" alt="Foreground bold line" src="/img/foreground-bold-line.svg" />
                <div className="text-wrapper-10">$0</div>
              </div>
              <div className="text-wrapper-11">$3,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
