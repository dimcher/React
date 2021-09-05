import React,  {Component} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { loadCatalog } from '../app/actions';

import {Slot} from './Slot';
import './Styles.css';

const Slots = () => {
    const list = useSelector(state => state.list.show);
    return (
        <div className="slots">
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
        </div>    
    )
};

export default Slots;
