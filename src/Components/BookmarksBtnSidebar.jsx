import { Context } from "../Context/ContextProvider";

export default function BookmarksBtnSidebar() {
  const { BookmarkHandler, addQouteHandler } = Context();
  return (
    <div className=" h-[40rem] w-[13rem] rounded mt-5 ml-2 bg-[#fffc] absolute flex flex-col items-center gap-3">
      <button
        onClick={BookmarkHandler}
        className="w-40 h-8 mt-6 bg-[#332fad] text-[#ffff] rounded"
      >
        Bookmarks
      </button>
      <button
        onClick={addQouteHandler}
        className=" w-40 h-8 text-[#ffff]  bg-[#332fad] rounded text-nowrap"
      >
        Add new Bookmarks
      </button>
    </div>
  );
}
