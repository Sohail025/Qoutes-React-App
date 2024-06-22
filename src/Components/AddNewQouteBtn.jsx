import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";
export default function AddNewQouteBtn() {
  return (
    <>
      <Link
        to={"/addnewqoute"}
        className="bg-[#30309c] px-5 py-2 rounded invisible lg:visible lg:mr-5 hidden lg:block"
      >
        Add new Qoute
      </Link>
    </>
  );
}
