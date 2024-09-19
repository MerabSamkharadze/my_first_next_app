"use client";
import style from "./ToDo.module.css";
import { useState } from "react";

export default () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([{ id: 1, tsk: "dawere kodi" }]);
  const onChange = (e: any) => {
    setTask(e.target.value);
  };
  const add = () => {
    setTasks([...tasks, { id: iditor(tasks), tsk: task }]);
    setTask("");
  };
  function iditor(arr: any) {
    let sorted = [...tasks].sort((a, b) => a.id - b.id);
    return sorted[sorted.length - 1].id + 1;
  }
  return (
    <div>
      <input
        className={style.Input}
        type="text"
        value={task}
        onChange={onChange}
      />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.tsk}</li>
        ))}
      </ul>
    </div>
  );
};
