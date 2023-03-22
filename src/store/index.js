import { configureStore, combineReducers } from '@reduxjs/toolkit';

import aviasales from './aviasales';

const store = configureStore({
  reducer: combineReducers({ ...aviasales }),
});

export default store;
