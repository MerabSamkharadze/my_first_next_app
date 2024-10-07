"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
