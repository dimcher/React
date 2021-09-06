import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, resetList, newList, listPage, listPages, searchList, 
    changeView, resetSearch } from './actions';

const listState = {
    list: [],
    show: [],
    page: 1,
    pages: 0,

    apiKey: 'api_key=b987c4f78646d38a43e391c761addd2f',
    baseUrl: 'https://api.themoviedb.org/4',
    movieSrc: '/t/p/w440_and_h660_face/',
    moviePath: '/discover/movie?',
    bestMovies: '&primary_release_year=2010&sort_by=vote_average.desc'
};
const viewState = {
    view: 0,
    views: [
        { name: 'ALL', icon: 'all' },
        { name: 'NEW', icon: 'new' },
        { name: 'TOP', icon: 'top' }
    ],
    search: ""
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
    
    }).addCase(searchList, (state, action) => {
        const regex = new RegExp("\\b" + action.payload);
        state.show = state.list.filter(slot => {
            return regex.test(slot.title);
        })
    });
});

const viewReducer = createReducer(viewState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        const view = action.payload;
        state.view = view;
    }).addCase(resetSearch, (state, action) => {
        state.search = ""
    });

});

export { listReducer, viewReducer };
