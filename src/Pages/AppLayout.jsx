import { Context } from "../Context/ContextProvider";
import Header from "../Components/Header";
import PagesBtn from "../Components/PagesBtn";
import Spinner from "../Components/Spinner";
import BookmarksBtnSidebar from "../Components/BookmarksBtnSidebar";
import QouteBox from "../Components/QouteBox";
export default function AppLayout() {
  document.body.style.backgroundColor = "#212121";
  return (
    <main className="">
      <Header />
      <Container />
    </main>
  );
}
function Container() {
  const { qoute, loading, bookmarkStat, btnSidebar } = Context();
  return (
    <>
      {btnSidebar && <BookmarksBtnSidebar />}
      {loading ? (
        <Spinner />
      ) : (
        <section
          className="gap-[3rem] my-20 grid grid-cols-1
      place-items-center mx-5 md:grid-cols-2 md:h-60 md:place-self-center lg:grid-cols-3"
        >
          {qoute?.map((item) => (
            <QouteBox item={item} key={item._id} />
          ))}
          {bookmarkStat === false && <PagesBtn />}
        </section>
      )}
    </>
  );
}
