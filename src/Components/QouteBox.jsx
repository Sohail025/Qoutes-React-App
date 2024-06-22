import BookmarkIcon from "./BookmarkBtn";
export default function QouteBox({ item }) {
  return (
    <div className="h-48 w-[380px] sm:w-[540px] sm:h-48 md:w-[21rem] bg-[#963e3e] font-sans rounded flex flex-col justify-center gap-2 text-[#ffff] lg:w-[300px] xl:w-[380px]">
      <h2 className="qoute mx-5 text-[1.1rem] font-medium font-serif">
        {item.content}
      </h2>
      <span className="mx-5 italic text-[15px]">{`"${item.author}"`}</span>
      <BookmarkIcon item={item} />
      {item.status && (
        <span className=" ml-[16.4rem] mt-[7.3rem] absolute bg-[#f4d168] text-[#000000] px-2 py-[0.1rem] text-[0.8rem] rounded">
          {item.status}
        </span>
      )}
    </div>
  );
}
