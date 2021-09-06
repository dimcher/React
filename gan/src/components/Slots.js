import React from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Slots = () => {
    console.log('Slots .....');
    
    const slots = useSelector(state => state.list.show);
    const code = slots.map((slot, idx) => {
        const src = 'https://www.themoviedb.org/t/p/w440_and_h660_face' + slot.poster_path;
        return <div key={idx}>
                    <img src={ src } alt="" />
                </div>
    });
    return (
        <div className="slots">
            {code}
        </div>    
    )
};

export default Slots;
