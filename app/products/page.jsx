"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    axios.get("https://dummyjson.com/products").then((responce) => {
      setProducts(responce.data.products);
    });
  }
  useEffect(getProducts, []);
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}
