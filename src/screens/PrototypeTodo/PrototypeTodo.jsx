import React from "react";
import "./style.css";

export const PrototypeTodo = () => {
  return (
    <div className="prototype-todo">
      <div className="navigation-bar">
        <div className="overlap-group">
          <div className="to-do">
            <div className="todo-text">To-do</div>
            <img className="todo-list" alt="Todo list" src="/img/todo-list.svg" />
          </div>
          <div className="to-plan">
            <div className="text-wrapper">Plan</div>
            <img className="calendar" alt="Calendar" src="/img/calendar.svg" />
          </div>
          <div className="purchase">
            <div className="text-wrapper">Purchase</div>
            <img className="purchase-bag" alt="Purchase bag" src="/img/purchase-bag.svg" />
          </div>
          <div className="get-around">
            <div className="div">Get Around</div>
            <img className="map" alt="Map" src="/img/map.svg" />
          </div>
        </div>
        <img className="home" alt="Home" src="/img/home.svg" />
      </div>
      <div className="todo-box">
        <div className="overlap">
          <div className="overlap-group-2">
            <div className="text-wrapper-2">To-do</div>
            <img className="img" alt="Todo close" src="/img/todo-close.svg" />
          </div>
          <img className="add-todo-button" alt="Add todo button" src="/img/add-todo-button.png" />
          <div className="todo">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker" alt="Priority marker" src="/img/priority-marker-green.png" />
          </div>
          <div className="todo-2">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker" alt="Priority marker" src="/img/priority-marker-green.png" />
          </div>
          <div className="todo-3">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker-2" alt="Priority marker" src="/img/priority-marker-yellow.png" />
          </div>
          <div className="todo-4">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker-2" alt="Priority marker" src="/img/priority-marker-yellow.png" />
          </div>
          <div className="todo-5">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker-red" alt="Priority marker red" src="/img/priority-marker-red.png" />
          </div>
          <div className="todo-6">
            <div className="checkbox" />
            <p className="todo-description">Follow up with management about mail-box</p>
            <img className="priority-marker-red" alt="Priority marker red" src="/img/priority-marker-red.png" />
          </div>
        </div>
      </div>
      <div className="completed-box">
        <div className="overlap-2">
          <div className="text-wrapper-2">Completed</div>
          <img className="img" alt="Open completed" src="/img/open-completed.svg" />
        </div>
      </div>
      <header className="header">
        <div className="personalised">To-do List</div>
      </header>
    </div>
  );
};
