import React from 'react';
import SearchBar from './SearchBar';
import ResCard from './ResCard';

const RestaurantContainer = () => {
  return (
    <div className=' mt-6'>
      <div className='search-container flex justify-center'>
        {/* Search bar  */}
        <SearchBar />
      </div>
      <div className='res-card mt-7 flex justify-center flex-wrap'>
        <ResCard />
      </div>
    </div>
  );
};

export default RestaurantContainer;
