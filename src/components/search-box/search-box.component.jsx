import React from 'react';
import './search-box.styles.css';

export const Searchbox = ({placeholder, handleevent}) => (
    <input
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onClick={handleevent}
      />
)