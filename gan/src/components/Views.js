import React  from 'react';
import { topList, resetList, newList, changeView } from '../app/actions';
import { useSelector, useDispatch } from 'react-redux';

import './Styles.css';

const Views = () => {
    const view = useSelector(state => state.view.view);
    const views = useSelector(state => state.view.views);
    const dispatch = useDispatch();
    const changeViewHandler = (idx) => {
        dispatch(changeView(idx));
        switch (idx) {
            case 0:
                dispatch(resetList());
                break;
            case 1:
                dispatch(newList());
                break;
            case 2:
                dispatch(topList());
                break;
            default:
                dispatch(resetList());
        }
    };
    const code = views.map((item, idx) => {
        const vico = <div className={item.icon + " icon"}>&nbsp;</div>
        const vbut = <div>{item.name}</div>
        const i = idx === view
        ? <div className="active">{vico}{vbut}</div>
        : <div>{vico}{vbut}</div>;

        return <div key={idx} onClick={() => changeViewHandler(idx)}>{i}</div>
    }); 
    return (
        <div className="views">{code}</div>    
    )
};

export default Views;