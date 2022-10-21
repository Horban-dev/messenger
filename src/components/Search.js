import React from 'react';
import { useState } from 'react'

const Search = ({onDialogFiltersChange}) => {

    return (
        <div className='search'>
            <input 
                className='search_panel' 
                type="text" 
                placeholder='Search or start new chat'
                onChange={e => onDialogFiltersChange(e.target.value.toLowerCase())}
            />
        </div>
    );
};

export default Search;