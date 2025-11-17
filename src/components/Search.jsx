import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

function Search({
  query,
  onQueryChange,
  onSortByChange,
  onOrderByChange,
  sortBy,
  orderBy,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  function handleShowDropDown() {
    setShowDropDown((prev) => !prev);
  }

  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="border border-gray-300 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  py-2"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border border-blue-400 text-sm text-white hover:bg-blue-400/80 transition-all  flex items-center cursor-pointer"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={handleShowDropDown}>
              Sort By <BiCaretDown className="ml-2" />
            </button>
            {showDropDown && (
              <DropDown
                onSortByChange={onSortByChange}
                onOrderByChange={onOrderByChange}
                sortBy={sortBy}
                orderBy={orderBy}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DropDown({ onSortByChange, onOrderByChange, sortBy, orderBy }) {
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 ">
      <div
        className="py-1 "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        <div
          onClick={() => onSortByChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">
          Pet Name {sortBy === "petName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-300 border-t"
          role="menuitem">
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
}

export default Search;
