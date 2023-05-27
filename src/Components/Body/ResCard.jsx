import React from 'react';
import Logo from '../../assets/react.svg';
import { restaurantList } from '../../../Data';
import { useState, useEffect } from 'react';

import axios from 'axios';

const ResCard = (props) => {
  const [listOfRestaurants, setListOfRestaurants] = useState('');

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const response = await axios.get(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING'
    );
    const resData = await response.data;
    console.log('response', resData);
  };

  return (
    <>
      {restaurantList.length > 0 &&
        restaurantList.map((resData) => {
          return (
            <React.Fragment key={resData?.data?.id}>
              <div
                key={resData?.data?.id}
                className='max-w-sm m-6 w-72 h-128 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:shadow-lg'
              >
                <a href='#'>
                  <img
                    className='rounded-t-lg w-72 h-40 object-cover'
                    src={
                      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
                      resData?.data?.cloudinaryImageId
                    }
                    alt=''
                  />
                </a>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      {resData?.data?.name}
                    </h5>
                  </a>
                  <p className='mb-3 break-all font-normal text-gray-700 dark:text-gray-400'>
                    {resData?.data.cuisines.slice(0, 4).join(', ')}
                  </p>
                  <p className='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>
                    {resData?.data?.avgRating
                      ? resData?.data?.avgRating + ' ' + 'Stars'
                      : 'No Rating '}
                  </p>
                  <p className='mb-3 font-normal text-xs text-gray-700 dark:text-gray-400'>
                    {resData?.data?.deliveryTime} MINS
                  </p>
                  <p className='mb-3 font-normal text-xs text-gray-700 dark:text-gray-400'>
                    ₹{resData?.data.costForTwo / 100} FOR TWO
                  </p>
                  <a
                    href='#'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Order Now
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default ResCard;
