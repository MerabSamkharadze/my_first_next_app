"use client";
import style from './Counter.module.css'
import { useState } from "react";

export default () => {
  const [counter, setCount] = useState(0);
  return (
    <div className={style.Container}>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCount(counter + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};
