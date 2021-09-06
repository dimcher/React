import React from 'react';

import { useSelector } from 'react-redux';

import Actions from './Actions';

import './Styles.css';

const Header = () => {
    const show = useSelector(state => state.list.show);
    return (
        <div className="header">
            <div className="title"><p className="text">SLOTS</p><p className="counter">found: { show.length }</p></div>
            <div className="counter"></div>
            <Actions></Actions>
        </div>    
    )
}

export default Header;
