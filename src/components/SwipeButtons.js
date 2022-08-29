import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import React from 'react';
import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons_repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_star'>
            <StarIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_right'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_lightning'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  );
}

export default SwipeButtons;