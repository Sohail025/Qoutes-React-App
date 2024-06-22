import { useState } from "react";
import { set } from "idb-keyval";
import { Context } from "../Context/ContextProvider";
import BackBtn from "../Components/BackBtn";
export default function AddNewQoute() {
  const { bookmarks, setBookmarks } = Context();
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");
  const [catagery, setCatagery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQoute = {
      content: qoute,
      author,
      status: "created",
    };
    set("bookmarks", [...bookmarks, newQoute]);
    setBookmarks((data) => [...data, newQoute]);
    console.log(newQoute);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-md w-full space-y-8 rounded-xl p-8 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-center">Add New Qoute</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium">
              Qoute :
            </label>
            <input
              type="text"
              value={qoute}
              onChange={(e) => setQoute(e.target.value)}
              className="AddnewQoute_qoute px-3 text-start py-4 h-20 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent border-box text-nowrap"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">
              Auther :
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="px-3 py-2 w-40 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-row justify-between ">
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="py-2 px-4 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              Submit
            </button>
            <BackBtn />
          </div>
        </form>
      </div>
    </div>
  );
}
