import React,  {Component} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { loadCatalog } from '../app/actions';

import {Slot} from './Slot';
import './Styles.css';

const Slots = () => {
    const books = useSelector(state => console.log(state));
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
