"use client";

import axios from "axios";
import { useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  const getProducts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts);
    });
  };
  console.log(posts);

  return (
    <div>
      <button onClick={getProducts}>get data</button>
    </div>
  );
}
