import { createAction } from '@reduxjs/toolkit'

const topList = createAction('topList');
const newList = createAction('newList');
const loadList = createAction('loadList');
const appendList = createAction('appendList');
const resetList = createAction('resetList');
const searchList = createAction('searchList');
const listPage = createAction('listPage');
const listPages = createAction('listPages');
const changeView = createAction('changeView');
const setSearch = createAction('setSearch');
const resetSearch = createAction('resetSearch');

export { topList, loadList, appendList, resetList, newList, searchList, listPage, listPages, changeView, setSearch, resetSearch };