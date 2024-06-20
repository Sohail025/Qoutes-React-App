import { Context } from "../Context/ContextProvider";
export default function Header({ children }) {
  const {
    BookmarkHandler,
    SearchBtnHandler,
    inputSearch,
    SetInputSearch,
    addQouteHandler,
    bookmarkeddata,
    bookmarkStat,
    LoginPageHandler,
    handlebtnSiderbar,
  } = Context();
  return (
    <header class="bg-gray-800 text-white">
      <nav class=" flex items-center justify-between py-4 mx-auto lg:mx-5">
        <a
          onClick={handlebtnSiderbar}
          className="ml-3 sm:ml-4 sm:h-7 sm:w-7 lg:invisible"
        >
          <img
            className="w-6"
            src="https://img.icons8.com/?size=100&id=8113&format=png"
            alt=""
          />
        </a>
        {bookmarkeddata > 0 && bookmarkStat && (
          <p className="ml-[15px] mt-36 bg-[#30309c] absolute px-20 py-2 rounded ">
            {`You Bookmarked ${bookmarkeddata.length} Qoutes`}
          </p>
        )}
        <a class=" text-lg font-semibold ml-2 sm:ml-5 mr-3 w-7 lg:w-12 lg:-ml-6">
          <img src="Logo.png" alt="Flowbite Logo" class=" lg:h-10 " />
        </a>
        <button
          onClick={BookmarkHandler}
          className=" bg-[#30309c] px-5 py-2 rounded cursor-pointer hidden lg:block"
        >
          Bookmarks
        </button>
        {/* <!-- Search feature (center) --> */}
        <form class="flex items-center max-w-sm mx-auto">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              value={inputSearch}
              onChange={(e) => SetInputSearch(e.target.value)}
              type="text"
              id="simple-search"
              placeholder="Search..."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-56 h-8 sm:w-64 sm:h-10 lg:h-12 lg:w-96"
              required
            />
          </div>
          <button
            onClick={SearchBtnHandler}
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-7 sm:w-12 sm:h-10 flex justify-center items-center"
          >
            <svg
              class="w-5 h-3 sm:h-4 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
        <button
          onClick={addQouteHandler}
          className="bg-[#30309c] px-5 py-2 rounded invisible lg:visible lg:mr-5 hidden lg:block"
        >
          Add new Qoute
        </button>
        <button
          onClick={LoginPageHandler}
          class="text-[0.8rem] font-medium text-white bg-blue-700 hover:bg-blue-800 py-2 rounded lg:mr-3 px-2 sm:mr-5 sm:px-5"
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
}
