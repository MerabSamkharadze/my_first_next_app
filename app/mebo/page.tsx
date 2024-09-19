import Link from "next/link";
import Counter from "../components/counter/Counter";
import TextInput from "../components/textInput/TextInput";

export default () => {
  return (
    <div>
      <Link href={"/mebo/samkharadze"}>go to gvari</Link>
      <Counter />
      <TextInput />
    </div>
  );
};
