"use client";

import { useState } from "react";
import style from "./TextInput.module.css";
export default () => {
  const [text, setText] = useState("");
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <>
      {text && <h1 className={style.Text}>Hello {text} </h1>}
      <input
        className={style.Input}
        type="text"
        onChange={onChange}
        placeholder="Enter your name"
      />
    </>
  );
};
