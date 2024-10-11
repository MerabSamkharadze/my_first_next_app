import Link from "next/link";
import axios from "axios";

export async function getProducts() {
  const res = await axios.get(`https://dummyjson.com/products`);
  return res.data.products;
}

export default async function Products() {
  const products = await getProducts();
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
