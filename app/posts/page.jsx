"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts);
    });
  };

  useEffect(getPosts, []);

  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
