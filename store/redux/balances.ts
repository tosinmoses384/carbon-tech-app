
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BalancesState {
  ids: number[];
}

const initialState: BalancesState = {
  ids: [],
};

const balancesSlice = createSlice({
  name: 'balances',
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<{ id: number }>) => {
      state.ids.push(action.payload.id);
    },
    removeBalance: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});

export const { addBalance, removeBalance } = balancesSlice.actions;
export default balancesSlice.reducer;













































// import { createSlice } from '@reduxjs/toolkit';

// const balancesSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//     ids: []
//   },
//   reducers: {
//     addBalance: (state, action) => {
//       state.ids.push(action.payload.id);
//     },
//     removeBalance: (state, action) => {
//       state.ids.splice(state.ids.indexOf(action.payload.id), 1);
//     }
//   }
// });

// export const addBalance = balancesSlice.actions.addBalance;
// export const removeBalance = balancesSlice.actions.removeBalance;
// export default balancesSlice.reducer;