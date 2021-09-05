import React from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Slots = () => {
    console.log('Slots .....');
    
    const slots = useSelector(state => state.list.show);
    const code = slots.map((slot, idx) => {
        return <div key={idx}>{ slot.name }</div>
    });
    return (
        <div className="slots">
            {code}
        </div>    
    )
};

export default Slots;
