import React,  {Component} from 'react';
import './Styles.css';

export class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
          action: props.name,
          active: props.active,
        };
    }

    render () {
        const code = this.state.active 
            ? <p className="active">{this.state.action}</p>
            : <p>{this.state.action}</p>;

        return (
            <div className="action">{code}</div>    
        )
    }
}