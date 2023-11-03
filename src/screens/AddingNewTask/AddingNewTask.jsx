import React from "react";
import "./style.css";

export const AddingNewTask = () => {
  return (
    <div className="adding-new-task">
      <div className="text-wrapper">Add New Task</div>
      <img className="close-button" alt="Close button" src="/img/close-button.svg" />
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
        <div className="description-box" />
      </div>
      <div className="add-task-button">
        <img className="group" alt="Group" src="/img/group-14.png" />
      </div>
    </div>
  );
};
