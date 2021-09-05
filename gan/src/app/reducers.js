import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, resetList, recentList, changeView } from './actions';

const loadData = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => data);
}

const listState = {
    list: loadData(),
    show: loadData(),
};
const viewState = {
    view: 0,
    views: [
        { name: 'ALL', icon: 'all' },
        { name: 'NEW', icon: 'new' },
        { name: 'TOP', icon: 'top' }
    ]
};

const listReducer = createReducer(listState, (builder) => {
    builder.addCase(loadList, (state, action) => {
        state.catalog = state.display = action.payload;

    }).addCase(resetList, (state, action) => {
        state.display = state.catalog;

    }).addCase(topList, (state, action) => {
        state.display = state.catalog.filter(slot => {
            return slot.top
        });

    }).addCase(recentList, (state, action) => {
        state.display = state.catalog.filter(slot => {
            return slot.recent
        });
    })
});

const viewReducer = createReducer(viewState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        state.view = action.payload;
    })
});

export { listReducer, viewReducer };
