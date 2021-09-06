import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, resetList, newList, listPage, listPages, changeView } from './actions';

const listState = {
    list: [],
    show: [],
    page: 1,
    pages: 0
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

    }).addCase(listPage, (state, action) => {
        state.page = action.payload;

    }).addCase(listPages, (state, action) => {
        state.pages = action.payload;
    });
});

const viewReducer = createReducer(viewState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        const view = action.payload;
        state.view = view;
        switch (view) {
            case 0:
                console.log("aaa");
                break;
            case 1:
                console.log("bbb");
                break;
            case 2:
                console.log("ccc");
                break;
        }
    })
});

export { listReducer, viewReducer };
