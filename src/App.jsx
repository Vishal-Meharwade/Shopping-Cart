import AllCard from "./components/AllCard";
import { useState, useMemo } from "react";
import { data } from "./utils/data";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [filterData, setFilterData] = useState(
    data.map((item) => ({ ...item, isFavorite: false }))
  );

  const favoriteCount = useMemo(() => {
    return filterData.filter((item) => item.isFavorite).length;
  }, [filterData]);

  function filterHandler() {
    let res = data
      .filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
      .map((item) => ({
        ...item,
        isFavorite:
          filterData.find((f) => f.id === item.id)?.isFavorite || false,
      }));
    setFilterData(res);
  }

  function toggleFavorite(id) {
    setFilterData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-lg z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
              Shopping Cart
            </h1>
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <span className="text-gray-600 font-semibold order-3 sm:order-none">
                Favorites: {favoriteCount}
              </span>
            </div>
          </div>
          {/* Search Bar */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <input
                className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-black transition-all duration-300"
                type="text"
                placeholder="Search products..."
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <button
              className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
              onClick={filterHandler}
            >
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <AllCard data={filterData} toggleFavorite={toggleFavorite} />
      </main>
    </div>
  );
}

export default App;
