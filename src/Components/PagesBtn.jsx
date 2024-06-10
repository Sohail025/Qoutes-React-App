import { Context } from "../Context/ContextProvider";

export default function PagesBtn() {
  const { nextpageHandler, backpageHandler, page } = Context();
  return (
    <div className="flex flex-row justify-center gap-10 ml-[52rem]">
      <button
        onClick={backpageHandler}
        className=" bg-[#30309c]  px-5 py-2 rounded cursor-pointer text-nowrap text-[#ffff]"
      >
        &larr;{` page ${page - 1}`}
      </button>
      <button
        onClick={nextpageHandler}
        className=" bg-[#30309c]  px-5 py-2 rounded cursor-pointer text-nowrap text-[#ffff]"
      >
        {`page ${page + 1} `}&rarr;
      </button>
    </div>
  );
}
