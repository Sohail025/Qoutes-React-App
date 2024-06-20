import { ContextProvider, Context } from "./Context/ContextProvider";

import Header from "./Components/Header";
import BookmarkIcon from "./Components/BookmarkBtn";
import Login from "./Pages/LoginPage";
import PagesBtn from "./Components/PagesBtn";
import Spinner from "./Components/Spinner";
import AddNewQoute from "./Pages/AddNewQoute";
import BookmarksBtnSidebar from "./Components/BookmarksBtnSidebar";
export default function App() {
  document.body.style.backgroundColor = "#212121";
  return (
    <ContextProvider>
      <main>
        <Header />

        <Container />
      </main>
    </ContextProvider>
  );
}
function Container() {
  const { qoute, loginPage, loading, bookmarkStat, addQoute, btnSidebar } =
    Context();
  return (
    <>
      {btnSidebar && <BookmarksBtnSidebar />}
      {loginPage || addQoute ? (
        <>
          {loginPage && <Login />}
          {addQoute && <AddNewQoute />}
        </>
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <section
              className="gap-[3rem] my-20 grid grid-cols-1
      place-items-center mx-5 md:grid-cols-2 md:h-60 md:place-self-center lg:grid-cols-3"
            >
              {qoute?.map((item) => (
                <Box item={item} key={item._id} />
              ))}
              {!bookmarkStat && <PagesBtn />}
            </section>
          )}
        </>
      )}
    </>
  );
}
function Box({ item }) {
  return (
    <div className="h-48 w-[380px] sm:w-[540px] sm:h-48 md:w-[21rem] bg-[#963e3e] font-sans rounded flex flex-col justify-center gap-2 text-[#ffff] lg:w-[300px] xl:w-[380px]">
      <h2 className="qoute mx-5 text-[1.1rem] font-medium font-serif">
        {item.content}
      </h2>
      <span className="mx-5 italic text-[15px]">{`"${item.author}"`}</span>
      <BookmarkIcon item={item} />
    </div>
  );
}
