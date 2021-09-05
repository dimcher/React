import React,  {Component} from 'react';

import './Styles.css';
import Views from './Views';
import Search from './Search';

const Actions = () => {
    return (
        <div>
            <Views></Views>
            <Search></Search>
        </div>
    )
};

export default Actions;