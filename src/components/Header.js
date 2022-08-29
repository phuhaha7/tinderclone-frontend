import React from 'react';
import "./Header.css";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <AccountCircleIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img 
            className='header_logo'
            src='https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg'
            alt=''
        />

        <IconButton>
            <ChatIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  );
}

export default Header;