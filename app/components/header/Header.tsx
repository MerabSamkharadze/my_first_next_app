import Link from "next/link";
import Style from "./Header.module.css";

export default () => {
  return (
    <>
      <div className={Style.Header}>
        <Link href={"/mebo"}>mebo's page</Link>
        <Link href={"/leo"}>leo's page</Link>
      </div>
    </>
  );
};
