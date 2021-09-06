import React from 'react';
import { useSelector } from 'react-redux';

import './Styles.css';

const Slots = () => {
    const list = useSelector(state => state.list.show);
    const base = useSelector(state => state.list.siteBase + state.list.movieSrc);
    const code = list.map((slot, idx) => {
        const url = base + slot.poster_path;
        const src = base + slot.backdrop_path;

        return <div key={idx}>
                    <img src={ url } srcSet={ src } alt={ slot.title } />
                </div>
    });

    return (
        <div className="slots">
            {code}
        </div>    
    )
};

export default Slots;
