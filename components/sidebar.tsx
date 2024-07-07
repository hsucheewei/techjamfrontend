'use client';

import React, { useState } from 'react';
import filterlogo from '../src/assets/images/filtericon.png';
import FilterPage from './filter-page';
import Image from 'next/image';

export const Sidebar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <aside className="p-1 bg-black text-white flex justify-end items-center fixed top-12 w-full">
        <button onClick={toggleFilter} className="px-4 py-2 text-white rounded-md flex items-center">
          <Image src={filterlogo} width={0} height={0} alt="Filter Logo" className="h-6 w-6 mr-2 object-contain" />
        </button>
      </aside>

      {isFilterVisible && <FilterPage toggleFilter={toggleFilter} />}
    </div>
  );
};