import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, resetList, newList, changeView } from './actions';

const listState = {
    list: [],
    show: [],
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
        state.list = state.show = action.payload;
        console.log('dimcher.......', action.payload);

    }).addCase(resetList, (state, action) => {
        state.show = state.list;

    }).addCase(topList, (state, action) => {
        state.show = state.list.filter(slot => {
            return slot.top
        });

    }).addCase(newList, (state, action) => {
        state.show = state.list.filter(slot => {
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
