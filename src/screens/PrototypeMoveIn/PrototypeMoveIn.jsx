import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const PrototypeMoveIn = () => {
  return (
    <div className="prototype-move-in">
      <div className="navigation-bar">
        <div className="overlap-group">
          <div className="div" />
          <Link to="/todo">
            <div className="to-do">
              <div className="text-wrapper">To-do</div>
              <img className="todo-list" alt="Todo list" src="/img/todo-list.svg" />
            </div>
          </Link>
          
          <Link to="/plan">
            <div className="to-plan">
              <div className="plan-text">Plan</div>
              <img className="calendar" alt="Calendar" src="/img/calendar-bold.svg" />
            </div>
          </Link>
          
          <Link to="/list">
            <div className="purchase">
              <div className="text-wrapper">Purchase</div>
              <img className="purchase-bag" alt="Purchase bag" src="/img/purchase-bag.svg" />
            </div>
          </Link>
          
          <Link to="/city">
            <div className="get-around">
              <div className="get-around-2">Get Around</div>
              <img className="map" alt="Map" src="/img/map.svg" />
            </div>
          </Link>
          
          <Link to="/">
            <img className="home" alt="Home" src="/img/home.svg" />
          </Link>
          
        </div>
      </div>
      <div className="add-new-event-button">
        <img className="icon-text" alt="Icon text" src="/img/icon-text.png" />
      </div>
      <div className="second-date-box">
        <div className="day-date">
          <div className="text-wrapper-2">Oct. 27</div>
          <div className="text-wrapper-3">Friday</div>
        </div>
        <div className="event">
          <div className="overlap-group-2">
            <div className="event-description">Bed Set-up with c</div>
            <p className="time">4:30 p.m. - 8 p.m.</p>
          </div>
          <img className="color-line" alt="Color line" src="/img/color-line-2.svg" />
        </div>
        <div className="event-2">
          <div className="overlap">
            <div className="event-description-2">
              Kitchen Set-up <br />
              with B
            </div>
            <p className="p">3 p.m. - 4 p.m.</p>
          </div>
          <img className="img" alt="Color" src="/img/color-line-1.svg" />
        </div>
        <div className="event-3">
          <div className="overlap-2">
            <div className="event-description-3">
              Couch Set-up <br />
              with A
            </div>
            <p className="time-2">1 p.m. - 3 p.m.</p>
          </div>
          <img className="color-line-2" alt="Color line" src="/img/color-line-3.svg" />
        </div>
        <div className="weather-forecast">
          <div className="weather-data">
            <div className="h-l">H: 80&nbsp;&nbsp;L: 64</div>
          </div>
          <div className="weather-icon">
            <img
              className="emoji-white-sun-with"
              alt="Emoji white sun with"
              src="/img/emoji-white-sun-with-small-cloud.png"
            />
          </div>
        </div>
      </div>
      <div className="first-date-box">
        <div className="event">
          <div className="overlap-group-2">
            <div className="event-description">Bed Set-up with c</div>
            <p className="time">4:30 p.m. - 8 p.m.</p>
          </div>
          <img className="color-line" alt="Color line" src="/img/color-line-2.svg" />
        </div>
        <div className="event-2">
          <div className="overlap">
            <div className="event-description-2">
              Kitchen Set-up <br />
              with B
            </div>
            <p className="p">3 p.m. - 4 p.m.</p>
          </div>
          <img className="img" alt="Color line" src="/img/color-line-1.svg" />
        </div>
        <div className="event-3">
          <div className="overlap-3">
            <div className="event-description-3">
              Couch Set-up <br />
              with A
            </div>
            <p className="time-2">1 p.m. - 3 p.m.</p>
          </div>
          <img className="color-line-2" alt="Color line" src="/img/color-line.svg" />
        </div>
        <div className="day-date-2">
          <div className="text-wrapper-4">Oct. 26</div>
          <div className="text-wrapper-5">Thursday</div>
        </div>
        <div className="weather-forecast-2">
          <div className="weather-icon">
            <img className="emoji-cloud-with" alt="Emoji cloud with" src="/img/emoji-cloud-with-rain.png" />
          </div>
          <div className="h-l-wrapper">
            <div className="h-l">H: 74&nbsp;&nbsp;L: 58</div>
          </div>
        </div>
      </div>
      <div className="view-in-calendar-box">
        <div className="overlap-4">
          <div className="text-wrapper-6">View in Calendar</div>
          <img className="calendar-icon" alt="Calendar icon" src="/img/calendar-icon.svg" />
        </div>
      </div>
      <header className="header">
        <div className="personalised">Move-in Plan</div>
      </header>
    </div>
  );
};
