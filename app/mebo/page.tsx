import Link from "next/link";
import Counter from "../components/counter/Counter";

export default () => {
  return (
    <div>
      <Link href={"/mebo/samkharadze"}>go to gvari</Link>
      <Counter />
    </div>
  );
};
