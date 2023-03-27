import { useState } from "react";
import React, { Component } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "shifokor ko`rigiga borish",
      day: "jan 8th at 8:30am",
      reminder: false,
    },
    {
      id: 2,
      text: "kompaniyada meeting",
      day: "march 31st at 8:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Do`konga chiqib kelish",
      day: "march 88th at 3:00pm",
      reminder: false,
    },
  ]);

  const deleteTasks = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />
      ) : (
        " Nothing to show "
      )}
    </div>
  );
}

export default App;
