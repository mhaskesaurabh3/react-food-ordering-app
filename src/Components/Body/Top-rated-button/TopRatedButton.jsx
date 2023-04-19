import React from 'react';

const TopRatedButton = () => {
  return (
    <div className='flex justify-center mt-9'>
      <a
        href='#'
        className='flex w-56 justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-lightGreen rounded-lg hover:shadow-xl focus:outline-none'
      >
        Top Rated Restaurants
      </a>
    </div>
  );
};

export default TopRatedButton;
