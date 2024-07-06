import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";
export default function AddNewQouteBtn() {
  return (
    <>
      <Link
        to={"/addnewqoute"}
        className="bg-[#229371] font-bold px-5 py-2 rounded invisible lg:visible lg:mr-5 hidden xl:block "
      >
        Add new Qoute
      </Link>
    </>
  );
}
