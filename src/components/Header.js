import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='headerLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/800px-Logo%21_Logo.svg.png' alt='Logo'
        />
        <div className='headerSearch'>
            <input className='headerSearchInput' type='text'/>
            <SearchIcon className='headerSearchIcon' />
        </div>
        <div className='headerNavbar'>
            <div className='headerNavbarOption'>
                <span className='headerNavbarOptionLine'>Sign Up</span>
            </div>
            <div className='headerNavbarOption'>
                <span className='headerNavbarOptionLine'>Sign In</span>
            </div>
            <div className='headerNavbarBasketOption'>
                <ShoppingBasketIcon />
                <span className='headerBasketCount'>0</span>
            </div>
        </div>
    </div>
  ) 
}

export default Header;
