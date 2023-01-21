import React, { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    // select the value attribute using inbuilt function event object by using dot notation & set the value to newTask state variable using setter function.
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    // toDoList = newTask, newTask, newTask, newTask, newTask.
    // toDoList[0] = First Newtask
    // Index vs Length
    // toDoList.id = newTask.id = Index Number

    // const array = []
    // const name = "Shubham"
    // console.log(array.push(name))
    // spread operator => toDoList(ArrayOfString) = newTask, newTask, newTask.
    // const newToDoList = [...toDoList, newTask];
    // Optimization =>
    // add the tasks in the toDoList(ArrayOfString)
    // newToDoList Variable must hold the previous newTask along with newly added newTask.
    // setToDoList([...toDoList, newTask]);
    // Embedd the Complete Object i.e. task
    setToDoList([...toDoList, task]);
  };

  // const deleteTask = (taskName) => {
  const deleteTask = (id) => {
    // const arr = ["Shubham", "Peaky", "Suriname"];
    // const newArr = arr.filter((name) => {
    //   // the elements you don't wanna keep as false.
    //   if (name === "Shubham") {
    //     return false;
    //     // the elements you wanna keep as true.
    //   } else {
    //     return true;
    //   }
    // });
    // const newToDoList = toDoList.filter((task) => task !== taskName);
    // { return task !== taskName}) ;
    // if (task === taskName) {
    //   // the elements you don't wanna keep, so given as false.
    //   return false;
    // } else {
    //   // the elements you wanna keep, so given as true.
    //   return true;
    // }
    // Return all the tasks which aren't similar when clicked, Filter Operation.

    // setToDoList(newToDoList);
    // setToDoList(toDoList.filter((task) => task !== taskName));
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const taskComplete = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          // Everything in the task object must remain the same.
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="app">
      {/* BEM Layout ==> Add Task */}
      <div className="app__addTask">
        <h1>ToDoList App</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter your Today's Task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* BEM Layout ==> List of Tasks */}
      <div className="app__list">
        {/* newTask */}
        {/* Whenever the state updated, map over the each elements of a toDoList Array, return 
            the given value & display in UI */}
        {/* Array Mapping Method */}
        {toDoList.map((task) => {
          // task = newTask (String)
          return (
            // Task Component - Commments of JavaScript Scope
            // <div className="task" key={task.id}>
            //   {/* Comments of JSX Scope */}
            //   {/* task is a String not a Object  */}
            //   <h1>{task.taskName}</h1>
            //   {/* Use the Array Filter Method with specified condition on Deleting an Element of an Array */}
            //   <button
            //     className="task__delete"
            //     onClick={() => deleteTask(task.id)}
            //   >
            //     X
            //   </button>
            //   {/* <button onClick={() => deleteTask(task)}>X</button> */}
            //   {/* <button onClick={() => completeTask(task.completed)}>Cpmplete</button> */}
            //   <button className="task__complete">Complete</button>
            // </div>
            <Task
              id={task.id}
              completed={task.completed}
              taskName={task.taskName}
              taskComplete={taskComplete}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
