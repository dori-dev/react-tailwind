import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-blue-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search Image Term..."
            className="search-input"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
