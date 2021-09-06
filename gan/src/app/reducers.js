import { createReducer } from '@reduxjs/toolkit';
import { topList, loadList, appendList, resetList, newList, listPage, listPages, searchList, 
    changeView, setSearch, resetSearch } from './actions';

const listState = {
    list: [],
    show: [],
    page: 1,
    pages: 0,

    apiKey: 'api_key=b987c4f78646d38a43e391c761addd2f',
    apiBase: 'https://api.themoviedb.org',
    siteBase: 'https://www.themoviedb.org',
    movieSrc: '/t/p/w440_and_h660_face',
    showPage: '&page=',
    moviePath: '/4/discover/movie?',
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
        if (action.payload.results) {
            const list = action.payload.results;
            state.list = list;
            state.show = list;
        }
        state.page = action.payload.page;
        state.pages = action.payload.pages;

    }).addCase(appendList, (state, action) => {
        if (action.payload.results) {
            const list = action.payload.results;
            state.list.push(...list);
            state.show.push(...list);
        }
        state.page = action.payload.page;
        state.pages = action.payload.pages;
    
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
        const regex = new RegExp('\\b'+action.payload, 'i');
        state.show = state.list.filter(slot => {
            console.log(slot.title);

            return regex.test(slot.title);
        })
    });
});

const viewReducer = createReducer(viewState, (builder) => {
    builder.addCase(changeView, (state, action) => {
        const view = action.payload;
        state.view = view;

    }).addCase(setSearch, (state, action) => {
        state.search = action.payload

    }).addCase(resetSearch, (state, action) => {
        state.search = ""
    });

});

export { listReducer, viewReducer };
