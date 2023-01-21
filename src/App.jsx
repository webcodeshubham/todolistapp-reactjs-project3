import React, { useState } from "react";

import "./App.css";

function App() {
  const [ toDoList, setToDoList ] = useState([])
  const [ newTask, setNewTask ] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newToDoList = [ ...toDoList, newTask ]
    setToDoList(newToDoList)
  }


  return <div className="App">
    <div className="addTask">
      <input type="text" onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="list">
      {toDoList.map((task) => {
        return <h1>{task}</h1>
      })}
    </div>
  </div>;
}

export default App;
