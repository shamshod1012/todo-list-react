import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;
