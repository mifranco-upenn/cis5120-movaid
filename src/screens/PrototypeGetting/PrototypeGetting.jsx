import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const PrototypeGetting = () => {
  return (
    <div className="prototype-getting">
      <header className="header">
        <div className="personalised">Getting Around Philadelphia</div>
      </header>
      <div className="navigation-bar">
        <div className="overlap-group">
          <Link to="/todo">
            <div className="to-do">
              <div className="text-wrapper">To-do</div>
              <img className="todo-list" alt="Todo list" src="/img/todo-list.svg" />
            </div>
          </Link>
          
          <Link to="/plan">
            <div className="to-plan">
              <div className="text-wrapper">Plan</div>
              <img className="calendar" alt="Calendar" src="/img/calendar.svg" />
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
              <div className="div">Get Around</div>
              <img className="map" alt="Map" src="/img/map-bold.svg" />
            </div>
          </Link>
          
        </div>
        <Link to="/">
          <img className="home" alt="Home" src="/img/home.svg" />
        </Link>
        
      </div>
      <div className="map-of-city">
        <img className="map-image" alt="Map image" src="/img/map-image.png" />
        <div className="text-wrapper-2">Map</div>
      </div>
      <div className="recommendations">
        <div className="recs-header">Recommendations</div>
        <div className="recommendation">
          <div className="overlap-group-2">
            <div className="recommendation-text">Hiking Trails Around Philadelphia</div>
            <img className="link-out" alt="Link out" src="/img/link-out-2.svg" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="recommendation-text">Top Rated Museums in Philadelphia</p>
            <img className="img" alt="Link out" src="/img/link-out-1.svg" />
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap">
            <div className="recommendation-text">
              Best Cheesesteaks in
              <br />
              Philadelphia
            </div>
            <img className="img" alt="Link out" src="/img/link-out.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
