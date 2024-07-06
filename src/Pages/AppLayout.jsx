import { Context } from "../Context/ContextProvider";
import Header from "../Components/Header";
import PagesBtn from "../Components/PagesBtn";
import Spinner from "../Components/Spinner";
import QouteBox from "../Components/QouteBox";
import Btn from "../Components/Btn";
export default function AppLayout() {
  document.body.style.backgroundColor = "#afbcbd";
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
    <div className="no-scrollbar">
      {btnSidebar && (
        <div className="flex justify-evenly mt-3">
          <Btn>Bookmarks</Btn>
          <Btn>Add bookmark</Btn>
          <Btn>SignUp</Btn>
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="gap-[3rem] my-20 grid grid-cols-1
      place-items-center mx-5 md:grid-cols-2 md:h-60 md:place-self-center lg:grid-cols-2 xl:grid-cols-3 no-scrollbar"
        >
          {qoute?.map((item) => (
            <QouteBox item={item} key={item._id} />
          ))}
          {bookmarkStat === false && <PagesBtn />}
        </div>
      )}
    </div>
  );
}
