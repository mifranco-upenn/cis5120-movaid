import React from "react";
import "./style.css";

export const PrototypeMain = () => {
  return (
    <div className="prototype-main">
      <div className="overlap">
        <div className="customizable-widget">
          <div className="widget-box" />
          <div className="text-wrapper">Getting around Philly</div>
        </div>
        <div className="navigation-bar">
          <div className="overlap-group">
            <div className="to-plan">
              <div className="div">Plan</div>
              <img className="calendar" alt="Calendar" src="/img/calendar.svg" />
            </div>
            <div className="to-do-group">
              <div className="div">To-do</div>
              <img className="todo-list" alt="Todo list" src="/img/todo-list.svg" />
            </div>
            <div className="purchase">
              <div className="div">Purchase</div>
              <img className="purchase-bag" alt="Purchase bag" src="/img/purchase-bag.svg" />
            </div>
            <div className="get-around">
              <div className="get-around-2">Get Around</div>
              <img className="map" alt="Map" src="/img/map.svg" />
            </div>
          </div>
          <img className="home" alt="Home" src="/img/home.svg" />
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="widget-box-2" />
          <div className="rectangle" />
          <div className="text-wrapper">Move-in Plan</div>
          <p className="open-full-plan">
            <span className="span">Open full plan</span>
            <span className="text-wrapper-2"> &gt;</span>
          </p>
          <p className="date">
            <span className="text-wrapper-3">
              Tue
              <br />
            </span>
            <span className="text-wrapper-4">24</span>
          </p>
          <div className="event">
            <div className="event-description-wrapper">
              <p className="event-description">
                <span className="text-wrapper-5">
                  Ankith is dropping off a table...
                  <br />
                </span>
                <span className="text-wrapper-6">10:00am</span>
              </p>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <p className="event-description">
                <span className="text-wrapper-5">
                  Michael is driving you to IKEA.
                  <br />
                </span>
                <span className="text-wrapper-6">3:30pm - 4:30pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="customizable-widget-2">
        <div className="overlap-3">
          <div className="widget-box-3" />
          <div className="text-wrapper">To-do</div>
          <p className="open-full-list">
            <span className="span">Open full list</span>
            <span className="text-wrapper-2"> &gt;</span>
          </p>
          <div className="checklist-item">
            <p className="p">Reach out to leasing agent regarding move-in time</p>
            <img className="img" alt="Circle" src="/img/checkbox.png" />
            <img className="priority-marker" alt="Priority marker" src="/img/priority-marker-green.png" />
          </div>
          <div className="checklist-item-2">
            <p className="text-wrapper-7">Put all your documents into a folder</p>
            <img className="circle" alt="Circle" src="/img/checkbox.png" />
            <img className="priority-marker-2" alt="Priority marker" src="/img/priority-marker-yellow.png" />
          </div>
          <div className="checklist-item-3">
            <div className="overlap-group-2">
              <p className="text-wrapper-8">Follow up with management about mailbox</p>
              <img className="priority-marker-red" alt="Priority marker red" src="/img/priority-marker-red.png" />
            </div>
            <img className="img" alt="Checkbox" src="/img/checkbox.png" />
          </div>
        </div>
      </div>
      <div className="customizable-widget-3">
        <div className="overlap-3">
          <div className="widget-box-3" />
          <p className="open-full-list-2">
            <span className="span">Open full list</span>
            <span className="text-wrapper-2"> &gt;</span>
          </p>
          <div className="checklist-item-4">
            <div className="text-wrapper-9">Dish Soap</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-5">
            <div className="text-wrapper-9">Hand Soap</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-6">
            <div className="text-wrapper-10">Toiletries</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-7">
            <div className="text-wrapper-11">Couch</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-8">
            <div className="text-wrapper-11">Desk</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-9">
            <div className="bed">Bedsheets</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="checklist-item-10">
            <div className="text-wrapper-11">Kitchen Utensils</div>
            <img className="circle-2" alt="Circle" src="/img/circle-1.png" />
          </div>
          <div className="text-wrapper-12">Things to Purchase</div>
        </div>
      </div>
      <div className="welcome-greeting">
        <p className="move-in-countdown">
          <span className="text-wrapper-13">You are </span>
          <span className="text-wrapper-14">3 days</span>
          <span className="text-wrapper-13"> away from moving into 123 Main Street.</span>
        </p>
        <div className="personalised">Good evening, John!</div>
      </div>
      <div className="logo">
        <div className="overlap-4">
          <div className="logo-text">MovAid</div>
          <img className="logo-lines-right" alt="Logo lines right" src="/img/logo-lines-right.png" />
        </div>
        <img className="logo-lines-left" alt="Logo lines left" src="/img/logo-lines-left.png" />
      </div>
    </div>
  );
};
