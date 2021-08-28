import React from 'react'
import './SearchBar.css';
export default function SearchBar(props) {
    return (
        <div>
        <input type="search" placeholder="Search your desire !" onChange={props.searchChange} id ="searchInput" />
        </div>
    )
}
