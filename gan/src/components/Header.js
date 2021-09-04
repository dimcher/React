import React,  {Component} from 'react';

import {Action} from './Action';
import {Search} from './Search';

import './Styles.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: 0,
          actions: [
                { name: 'ALL', icon: 'all' },
                { name: 'NEW', icon: 'new' },
                { name: 'TOP', icon: 'top' }
            ]
        }
    }
    render () {
        let state = this.state;
        return (
            <div className="header">
                <div className="title"><p>SLOTS</p></div>
                <div className="actions">
                    {
                        state.actions.map((a, i) => 
                            <Action name={a.name} icon={a.icon} active={ state.active === i ? true : false} key={i}></Action>
                        )
                    }
                    <Search></Search>
                </div>
            </div>    
        )
    }
}