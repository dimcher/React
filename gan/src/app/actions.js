import { createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const topCatalog = createAction('topCatalog');
const loadCatalog = createAction('loadCatalog');
const resetCatalog = createAction('resetCatalog');
const recentCatalog = createAction('recentCatalog');
const changeView = createAction('changeCiew');

export { topCatalog, loadCatalog, resetCatalog, recentCatalog, changeView };