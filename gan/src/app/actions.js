import { createAction } from '@reduxjs/toolkit'

const topList = createAction('topList');
const newList = createAction('newList');
const loadList = createAction('loadList');
const resetList = createAction('resetList');
const searchList = createAction('searchList');
const listPage = createAction('listPage');
const listPages = createAction('listPages');
const changeView = createAction('changeView');

export { topList, loadList, resetList, newList, searchList, listPage, listPages, changeView };