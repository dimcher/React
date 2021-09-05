import React from 'react';

import { searchList } from '../app/actions';
import { useDispatch } from 'react-redux';

import './Styles.css';

function Search () {
    const dispatch = useDispatch();
    const pressSearchHandler = (e) => {
        if (e.charCode === 13) {
            const search = e.target.value;
            dispatch(searchList(search));
        }
    }
    const clickSearchHandler = (e) => {
        console.log(e);
        e.preventDefault();
        const search = e.target.previousElementSibling.firstChild.value;
        dispatch(searchList(search));
    }

    return (
        <div className="search">
            <div>
                <div className="input"><input type="text" placeholder="Search" onKeyPress={ pressSearchHandler } /></div>
                <div className="icon" onClick={ clickSearchHandler }>&nbsp;</div>
            </div>
        </div>    
    )
}

export default Search;