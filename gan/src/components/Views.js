import React,  {Component} from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Views = () => {
    const view = useSelector(state => state.view.view);
    const views = useSelector(state => state.view.views);
    const code = views.map((item, idx) => {
        const i = idx === view.view
        ? <p className="active" key={idx}>{item.name}</p>
        : <p key={idx}>{item.name}</p>;

        return <div>{i}</div>
    }); 
    return (
        <div className="views">{code}</div>    
    )
};

export default Views;