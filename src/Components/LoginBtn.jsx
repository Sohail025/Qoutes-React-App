import { Link } from "react-router-dom";
export default function LoginBtn() {
  return (
    <Link
      to={"/login"}
      class="text-[0.8rem] font-medium text-white bg-blue-700 hover:bg-blue-800 py-2 rounded lg:mr-3 px-2 sm:mr-5 sm:px-5"
    >
      Sign Up
    </Link>
  );
}
