import React,  {Component} from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Views = () => {
    const view = useSelector(state => state.view.view);
    const views = useSelector(state => state.view.views);
    const code = views.map((item, idx) => {
        console.log(view);
        const i = idx === view
        ? <p className="active">{item.name}</p>
        : <p>{item.name}</p>;

        return <div key={idx}>{i}</div>
    }); 
    return (
        <div className="views">{code}</div>    
    )
};

export default Views;