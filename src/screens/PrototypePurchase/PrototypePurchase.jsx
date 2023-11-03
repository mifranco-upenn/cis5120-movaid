import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const PrototypePurchase = () => {
  return (
    <div className="prototype-purchase">
      <div className="add-room-button">
        <img className="add-room-icon-text" alt="Add room icon text" src="/img/add-room-icon-text.png" />
      </div>
      <div className="customizable-widget">
        <div className="overlap-group">
          <div className="checklist-items">
            <div className="checklist-item">
              <div className="text-wrapper">Ottoman</div>
              <img className="circle" alt="Circle" src="/img/circle.png" />
            </div>
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
        <div className="add-item">Add item &gt;</div>
        <div className="text-wrapper-3">Living Room</div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-2">
            <div className="widget-box" />
            <div className="checklist-items-2">
              <div className="checklist-item-5">
                <div className="text-wrapper">Hand Soap</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
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
          <div className="add-item-2">Add item &gt;</div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap">
          <div className="overlap-2">
            <div className="widget-box" />
            <div className="checklist-items-3">
              <div className="checklist-item-10">
                <div className="text-wrapper-4">Dish Soap</div>
                <img className="circle" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-11">
                <div className="text-wrapper-4">Pots and Pans</div>
                <img className="img" alt="Circle" src="/img/circle.png" />
              </div>
              <div className="checklist-item-12">
                <div className="text-wrapper-5">Blender</div>
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
          <div className="add-item-2">Add item &gt;</div>
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
