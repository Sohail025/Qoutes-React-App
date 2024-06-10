import { useEffect, createContext, useState, useContext } from "react";
import AddNewQoute from "../Pages/AddNewQoute";
const SetContext = createContext();

function ContextProvider({ children }) {
  const [qoute, SetQoutes] = useState([]);
  const [bookmark, SetBookmark] = useState({});
  const [storedBookmarks, SetstoredBookmarks] = useState([]);
  const [bookmarkeddata, setBookmarkedData] = useState([]);
  const [storedData, SetStoredData] = useState([]);
  const [inputSearch, SetInputSearch] = useState("");
  const [bookmarkStat, SetBookmarkStat] = useState(false);
  const [loginPage, SetLoginPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [addQoute, SetAddQoute] = useState(false);
  useEffect(
    function () {
      async function apiFetching() {
        try {
          const currPage = `&page=${page}`;
          setLoading(true);
          const res = await fetch(
            `https://api.quotable.io/quotes/random?limit=15&maxLength=7=80${currPage}`
          );
          const data = await res.json();
          const files = data.map((item) => [{ ...item, status: false }]);
          SetStoredData(files);
          SetQoutes(files);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
      apiFetching();
    },
    [page]
  );
  // First Mount Getting Local Storage
  useEffect(function () {
    const bookmarkedData = localStorage.getItem("newData");
    if (bookmarkedData) {
      const userData = JSON.parse(bookmarkedData);
      setBookmarkedData(userData);
    }
  }, []);
  // Setting the Bookmarks in the Local Starge
  useEffect(() => {
    SetstoredBookmarks(
      storedBookmarks.filter((item) => item[0].status === true)
    );
    localStorage.setItem("newData", JSON.stringify(storedBookmarks));
  }, [storedBookmarks]);
  // Getting the updated data from Local storage
  useEffect(() => {
    const bookmarkedData = localStorage.getItem("newData");
    if (bookmarkedData) {
      const userData = JSON.parse(bookmarkedData);
      setBookmarkedData(userData);
    }
  }, [storedBookmarks]);

  function Bookmarks(item) {
    SetstoredBookmarks((past) => [...past, [item]]);
    const id = item._id;
    const status = item.status;
    SetBookmark({ id, status });
  }
  // Search Button
  function SearchBtnHandler() {
    useEffect(
      function () {
        if (!inputSearch) return;
        async function apiFetching() {
          try {
            const res = await fetch(
              `https://api.quotable.io/quotes?limit=15&maxLength=7=80&tags=${inputSearch}`
            );
            const data = await res.json();
            const files = data.map((item) => [{ ...item, status: false }]);
            SetStoredData(files);
            SetQoutes(files);
          } catch (error) {
            console.error(error);
          }
        }
        apiFetching();
      },
      [inputSearch]
    );
  }
  function backpageHandler() {
    if (page > 1) setPage(page - 1);
  }
  function nextpageHandler() {
    setPage(page + 1);
  }
  // BookmarkButtonHandler
  function BookmarkHandler() {
    if (storedData.length > 0 && bookmarkStat) SetQoutes(storedData);
    if (bookmarkeddata.length > 0 && !bookmarkStat) SetQoutes(bookmarkeddata);
    SetBookmarkStat(!bookmarkStat);
  }
  function addQouteHandler() {
    SetAddQoute(!addQoute);
  }
  function LoginPageHandler() {
    SetLoginPage(!loginPage);
  }
  return (
    <SetContext.Provider
      value={{
        qoute,
        Bookmarks,
        bookmark,
        BookmarkHandler,
        SearchBtnHandler,
        inputSearch,
        SetInputSearch,
        addQouteHandler,
        bookmarkeddata,
        bookmarkStat,
        LoginPageHandler,
        loginPage,
        backpageHandler,
        nextpageHandler,
        page,
        loading,
        addQoute,
        storedData,
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
