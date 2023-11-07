import React from "react";
import "./style.css";
import "../AddingNewTask/style.css"
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { useState } from "react";

import { AddingNewTask } from "../AddingNewTask/AddingNewTask";


export const PrototypeTodo = () => {

  const [addingNewTask, setAddingNewTask] = useState(false);
  const [newTask, setNewTask] = useState({
    description: '',
    priority: 0
  });

  const handleSubmitNewTask = () => {
    setAddingNewTask(false)
  }


  return (
    <div className="prototype-todo">
      <div className="navigation-bar">
        <div className="overlap-group">
          <Link to="/todo">
            <div className="to-do">
              <div className="todo-text">To-do</div>
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
              <img className="map" alt="Map" src="/img/map.svg" />
            </div>
          </Link> 
        </div>
        <Link to="/">
          <img className="home" alt="Home" src="/img/home.svg" />
        </Link>
      </div>
      <div className="todo-box">
        <div className="overlap">
          <div className="overlap-group-2">
            <div className="text-wrapper-2">To-do</div>
            <img className="img" alt="Todo close" src="/img/todo-close.svg" />
          </div>


          <Popup trigger={<img className="add-todo-button" alt="Add todo button" src="/img/add-todo-button.png" />} modal nested>
              {/* <AddingNewTask /> */}
              {close => (<div className="adding-new-task">
              <div className="text-wrapper">Add New Task</div>
              <img className="close-button" alt="Close button" src="/img/close-button.svg" onClick={close}/>
              <div className="priority">
                <div className="div">Priority</div>
                <div className="priority-box">
                  <img className="priority-marker" alt="Priority marker" src="/img/priority-marker-green.png" />
                  <img className="img" alt="Priority marker" src="/img/priority-marker-yellow.png" />
                  <img className="priority-marker-red" alt="Priority marker red" src="/img/priority-marker-red.png" />
                  <img className="dividing-line" alt="Dividing line" src="/img/dividing-line-2.svg" />
                  <img className="dividing-line-2" alt="Dividing line" src="/img/dividing-line-2.svg" />
                </div>
              </div>
              <div className="task-description">
                <p className="p">
                  <span className="span">Task Description </span>
                  <span className="text-wrapper-2">*</span>
                </p>
                <input className="description-box" type="text" value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})}/>
              </div>
              <div className="add-task-button">
                <img className="group" alt="Group" src="/img/group-14.png" onClick={close} />
              </div>
            </div>)}
            
          </Popup>
          
          {newTask.description !== '' && 
            <div className="todo">
              <div className="checkbox" />
              <p className="todo-description">{newTask.description}</p>
              <img className="priority-marker" alt="Priority marker" src="/img/priority-marker-green.png" />
            </div>
          }
          
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
