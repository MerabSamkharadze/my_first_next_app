import React from "react";

import axios from "axios";

async function fetchPosts(id) {
  const responce = await axios.get(`https://dummyjson.com/products/${id}`);
  return responce.data;
}

export default async function Page({ params }) {
  const product = await fetchPosts(params.id);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
