import React,  {Component} from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Views = () => {
    const views = useSelector(state => state.views);
    const code = views.map((view, idx) => {
        <div>
            {
                idx === state.view
                ? <p className="active">{view.name}</p>
                : <p>{view.name}</p>
            }
        </div>
    }); 

    return (
        <div className="view">{code}</div>    
    )
};

export default Views;