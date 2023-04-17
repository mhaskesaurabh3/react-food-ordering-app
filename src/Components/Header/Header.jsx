import React from 'react';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <>
      <div className='header-section flex justify-between h-24 shadow-xl	'>
        <div className='logo-container'>
          <img className='w-32' src={Logo} alt='logo' />
        </div>
        <div className='nav-items mr-7 flex items-center'>
          <ul className='flex justify-between nav-ul '>
            <li className='mr-3'>Home</li>
            <li className='mr-3'>About us</li>
            <li className='mr-3'>Contact us</li>
            <li className='mr-3'>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
