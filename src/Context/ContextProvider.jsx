import { useEffect, createContext, useState, useContext } from "react";
const SetContext = createContext();
import { get, set } from "idb-keyval";
function ContextProvider({ children }) {
  const [qoute, SetQoutes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]); //
  const [bookmarkCopy, SetBookmarkCopy] = useState([]);
  const [inputSearch, SetInputSearch] = useState("");
  const [bookmarkStat, SetBookmarkStat] = useState(false);
  const [loginPage, SetLoginPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [addQoute, SetAddQoute] = useState(false);
  const [btnSidebar, SetbtnSidebar] = useState(false);
  const [isBookmark, SetisBookmark] = useState(false);

  async function apiFetching() {
    try {
      const currPage = `page=${page}`;
      setLoading(true);
      const res = await fetch(
        `https://api.quotable.io/quotes/random?limit=15&maxLength=80$${currPage}`
      );
      const data = await res.json();
      SetBookmarkCopy(data);
      SetQoutes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  ///////////////////////////
  ////////////////////////////
  useEffect(() => {
    apiFetching();
  }, [page]);
  useEffect(() => {
    get("bookmarks").then((res) => {
      setBookmarks(res);
    });
  }, []);
  function SearchBtnHandler() {}
  function backpageHandler() {
    if (page > 1) setPage(page - 1);
  }
  function nextpageHandler() {
    setPage(page + 1);
  }
  function BookmarkHandler() {
    if (!bookmarkStat && bookmarks.length > 0) SetQoutes(bookmarks);
    if (bookmarkStat) SetQoutes(bookmarkCopy);
    if (bookmarks.length > 0) SetBookmarkStat(!bookmarkStat);
  }
  function addQouteHandler() {
    SetAddQoute(!addQoute);
  }
  function LoginPageHandler() {
    SetLoginPage(!loginPage);
  }
  const handleBookMark = (item) => {
    SetisBookmark(!isBookmark);
    if (bookmarks.length === 0) {
      setBookmarks([item]);
      set("bookmarks", [item]);
    } else {
      if (bookmarks.find((olditem) => olditem._id === item._id)) {
        const newBookMarks = bookmarks.filter(
          (olditem) => olditem._id !== item._id
        );
        setBookmarks(newBookMarks);
        set("bookmarks", newBookMarks);
      } else {
        setBookmarks([...bookmarks, item]);
        set("bookmarks", [...bookmarks, item]);
      }
    }
    console.log(bookmarks);
  };

  const handlebtnSiderbar = () => {
    SetbtnSidebar(!btnSidebar);
  };

  return (
    <SetContext.Provider
      value={{
        qoute,
        bookmarks,
        handleBookMark,
        BookmarkHandler,
        SearchBtnHandler,
        inputSearch,
        SetInputSearch,
        addQouteHandler,
        bookmarkStat,
        LoginPageHandler,
        loginPage,
        backpageHandler,
        nextpageHandler,
        page,
        loading,
        addQoute,
        btnSidebar,
        SetbtnSidebar,
        handlebtnSiderbar,
      }}
    >
      {children}
    </SetContext.Provider>
  );
}
function Context() {
  return useContext(SetContext);
}
export { ContextProvider, Context };
