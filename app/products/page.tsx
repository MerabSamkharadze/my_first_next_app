"use client";

import axios from "axios";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts);
    });
  };
  console.log(posts);

  return (
    <div>
      <button onClick={getPosts}>get data</button>
      <ul>
        {posts.map((item: Post) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
