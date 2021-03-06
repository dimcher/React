import { configureStore } from '@reduxjs/toolkit';
import {listReducer, viewReducer} from './reducers';

const store = configureStore({
  reducer: {
    view: viewReducer,
    list: listReducer
  },
  dimcher: '1234'
});

export default store; 