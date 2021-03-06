import React from 'react';

import { searchList, setSearch, resetList } from '../app/actions';
import { useDispatch, useSelector } from 'react-redux';

import './Styles.css';

function Search () {
    const dispatch = useDispatch();
    const keyUpHandler = (e) => {
        e.preventDefault();
        const search = e.target.value;
        if (e.keyCode === 13) {
            dispatch(searchList(search));
        }
        else if (search.length === 0) {
            dispatch(resetList());
        }
    };
    const changeHandler = (e) => {
        e.preventDefault();
        dispatch(setSearch(e.target.value));
    };
    const clickSearchHandler = (e) => {
        e.preventDefault();
        const search = e.target.previousElementSibling.firstChild.value;
        dispatch(searchList(search));
    };

    const search = useSelector(state => state.view.search);

    return (
        <div className="search">
            <div>
                <div className="input">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={ search } 
                        onKeyUp={ keyUpHandler } 
                        onChange={ changeHandler } 
                    /></div>
                <div className="icon" onClick={ clickSearchHandler }>&nbsp;</div>
            </div>
        </div>    
    )
}

export default Search;