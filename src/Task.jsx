import React from "react";

const Task = (props) => {
    const { taskName, id, completed, deleteTask, taskComplete } = props
  return (
    <>
      <div
        className="task"
        style={{
          backgroundColor: completed ? "lightgreen" : "white",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        {/* Comments of JSX Scope */}
        {/* task is a String not a Object  */}
        <h1>{taskName}</h1>
        {/* Use the Array Filter Method with specified condition on Deleting an Element of an Array */}
        <button
          className="task__delete"
          onClick={() => deleteTask(id)}
        >
          X
        </button>
        {/* <button onClick={() => deleteTask(task)}>X</button> */}
        {/* <button onClick={() => completeTask(task.completed)}>Cpmplete</button> */}
        <button
          className="task__complete"
          onClick={() => taskComplete(id)}
        >
          Complete
        </button>
      </div>
    </>
  );
};

export default Task;
