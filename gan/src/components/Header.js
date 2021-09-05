import React,  {Component} from 'react';

import Actions from './Actions';

import './Styles.css';

export class Header extends Component {
    render () {
        let state = this.state;
        return (
            <div className="header">
                <div className="title"><p>SLOTS</p></div>
                <Actions></Actions>
            </div>    
        )
    }
}