import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, resetList, newList, searchList, changeView } from './actions';

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

    }).addCase(resetList, (state, action) => {
        state.show = state.list;

    }).addCase(topList, (state, action) => {
        state.show = state.list.filter(slot => {
            return slot.top
        })

    }).addCase(newList, (state, action) => {
        state.show = state.list.filter(slot => {
            return slot.recent
        })

    }).addCase(searchList, (state, action) => {
        if (action.payload.length) {
            state.show = state.list.filter(slot => {
                const regex = new RegExp('\\b' + action.payload, 'i');
                return regex.test(slot.name);
            })
        }
        else {
            state.show = state.list;
        }
    })
});

const viewReducer = createReducer(viewState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        state.view = action.payload;
    })
});

export { listReducer, viewReducer };
