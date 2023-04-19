import React from 'react';
import SearchBar from './SearchBar';
import ResCard from './ResCard';
import TopRatedButton from './Top-rated-button/TopRatedButton';

const RestaurantContainer = () => {
  return (
    <div>
      <div className='search-container flex justify-center'>
        {/* Search bar  */}
        {/* <SearchBar /> */}
        <TopRatedButton />
      </div>
      <div className='res-card mt-7 flex justify-center flex-wrap'>
        <ResCard />
      </div>
    </div>
  );
};

export default RestaurantContainer;
