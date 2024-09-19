import Link from "next/link";
import Todo from "../components/todo/Todo";

export default () => {
  return (
    <>
      <p>hello!</p>
      <Link href={"/leo/samkharadze/"}>see leos surname here</Link>
      <Todo />
    </>
  );
};
