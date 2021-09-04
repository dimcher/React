import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    dummy: reducer
  },
});

export default store; 