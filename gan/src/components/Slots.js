import React,  {Component} from 'react';
import {Slot} from './Slot';
import './Styles.css';

export class Slots extends Component {

    render () {
        return (
            <div className="slots">
                <Slot></Slot>
                <Slot></Slot>
                <Slot></Slot>
                <Slot></Slot>
            </div>    
        )
    }
}