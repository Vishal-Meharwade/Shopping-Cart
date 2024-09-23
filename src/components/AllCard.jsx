

// AllCard.js
import React from "react";

const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const AllCard = ({ data, toggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                View Details
              </button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-900">
                ${item.price}
              </span>
              <button
                onClick={() => toggleFavorite(item.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  item.isFavorite
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <HeartIcon filled={item.isFavorite} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCard;