// src/components/SearchBar.jsx
import React from 'react';
import SearchIcon from '../assets/images/search.svg';

const SearchBar = () => {
    return (
        <div className="flex items-center bg-slate-100 border-gray-300 rounded-md p-2 h-9">
            <img src={SearchIcon} alt="Search" className="w-5 h-4 mr-2" />
            <input
                type="text"
                placeholder="Search..."
                className="flex-grow border-none focus:outline-none bg-slate-100"
            />
        </div>
    );
};

export default SearchBar;