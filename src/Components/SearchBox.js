// src/components/SearchBox.js

import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center my-6">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
