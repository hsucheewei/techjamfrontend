'use client';

import React, { useState } from 'react';
import filterlogo from '../src/assets/images/filtericon.png';
import FilterPage from './filter-page';

export const Sidebar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <aside className="p-4 bg-black text-white flex justify-end items-center">
        <button onClick={toggleFilter} className="px-4 py-2 text-white rounded-md flex items-center">
          <img src={filterlogo} alt="Filter Logo" className="h-8 w-8 mr-2 object-contain" />
        </button>
      </aside>

      {isFilterVisible && <FilterPage toggleFilter={toggleFilter} />}
    </div>
  );
};