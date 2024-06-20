import { useEffect } from "react";
import { Context } from "../Context/ContextProvider";
export default function BookmarkIcon({ item }) {
  const { bookmarks, handleBookMark } = Context();
  const status = Boolean(bookmarks.find((olditem) => olditem._id === item._id));
  return (
    <span
      onClick={() => handleBookMark(item)}
      className="h-9 w-9 ml-80 mt-28 absolute cursor-pointer md:ml-56 xl:ml-80"
    >
      {status ? (
        <svg
          viewBox="0 0 24 24"
          fill=" #000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          onClick={() => handleBookMark(item)}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
