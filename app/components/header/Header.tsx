import Link from "next/link";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={Style.Header}>
        <Link href={"/mebo"}>mebo page</Link>
        <Link href={"/leo"}>leo page</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/products"}>products</Link>
      </div>
    </>
  );
}
