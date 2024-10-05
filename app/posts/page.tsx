"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

// Define the Post interface and use it
interface Post {
  id: number;
  title: string;
  body: string; // Add this if your API returns a body for each post
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post[] type here

  const getPosts = () => {
    axios.get("https://dummyjson.com/posts").then((result) => {
      setPosts(result.data.posts); // Assuming the API returns an array of posts
    });
  };

  return (
    <div>
      <button onClick={getPosts}>Get Data</button>
      <ul>
        {posts.map((item: Post) => (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
