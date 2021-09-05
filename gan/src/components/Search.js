import React from 'react';

import { searchList } from '../app/actions';
import { useDispatch } from 'react-redux';

import './Styles.css';

function Search () {
    const dispatch = useDispatch();
    const searchListHandler = (e) => {
        e.preventDefault();
        const search = e.target.previousElementSibling.firstChild.value;
        dispatch(searchList(search));
    }

    return (
        <div className="search">
            <div>
                <div className="input"><input type="text" placeholder="Search" /></div>
                <div className="icon" onClick={ searchListHandler }>&nbsp;</div>
            </div>
        </div>    
    )
}

export default Search;