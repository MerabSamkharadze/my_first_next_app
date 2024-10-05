// This is a server component by default, no need for "use client" directive

import axios from "axios";

// Define the Post interface
interface Post {
  id: number;
  title: string;
  body: string;
  reactions: object;
}

// Define the function to fetch data for the post
async function fetchPost(id: string) {
  const res = await axios.get(`https://dummyjson.com/posts/${id}`);
  return res.data;
}

// The main component that will display the post details
export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post: Post = await fetchPost(params.id);

  if (!post) {
    return <div>Loading...</div>; // Show loading state until the data is fetched
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </div>
  );
}
