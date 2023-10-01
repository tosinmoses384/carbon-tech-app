import { configureStore } from '@reduxjs/toolkit';

import balancesReducer from './balances';

export const store = configureStore({
  reducer: {
    balances: balancesReducer
  }
});