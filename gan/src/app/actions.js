import { createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const topList = createAction('topList');
const loadList = createAction('loadList');
const resetList = createAction('resetList');
const recentList = createAction('recentList');
const changeView = createAction('changeView');

export { topList, loadList, resetList, recentList, changeView };