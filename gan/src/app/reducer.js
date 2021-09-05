import { createReducer } from '@reduxjs/toolkit';
import { topCatalog, loadCatalog, resetCatalog, recentCatalog, changeView } from './actions';

const loadData = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => data);
}

const initialState = {
    catalog: loadData(),
    display: loadData(),
    view: 0,
    views: [
        { name: 'ALL', icon: 'all' },
        { name: 'NEW', icon: 'new' },
        { name: 'TOP', icon: 'top' }
    ]
};

const catalogReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadCatalog, (state, action) => {
        state.catalog = state.display = action.payload;

    }).addCase(resetCatalog, (state, action) => {
        state.display = state.catalog;

    }).addCase(topCatalog, (state, action) => {
        state.display = state.catalog.filter(slot => {
            return slot.top
        });

    }).addCase(recentCatalog, (state, action) => {
        state.display = state.catalog.filter(slot => {
            return slot.recent
        });
    })
});

const viewReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        state.view = action.payload;

    })
})

export default { catalogReducer, viewReducer };
