import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

const initialState = {
  token: null,
  user: null,
};

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

// export const { increment, decrement } = authSlice.actions;
export const { setToken, logout } = authSlice.actions;


export  const authSliceReducer = authSlice.reducer;
