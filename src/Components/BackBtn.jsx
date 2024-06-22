import { Link, useNavigate } from "react-router-dom";
export default function BackBtn() {
  const Navigate = useNavigate();
  // const BackBtnHandler = () => {
  //   Navigate(-1);
  // };
  return (
    <button
      onClick={() => Navigate("/")}
      className="py-2 px-4 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
    >
      Back
    </button>
  );
}
