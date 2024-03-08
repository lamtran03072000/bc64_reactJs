// Cú pháp tạo nhanh slice (reducer)
// rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = 19;

const fsizeReducer = createSlice({
  // Tên của reducer
  name: 'fsizeReducer',
  initialState: initialState,
  reducers: {},
});

export const {} = fsizeReducer.actions;

export default fsizeReducer.reducer;

// (state = 16, action) => {
//     if (action.type == 'CHANGE_FSIZE_ACTION') {
//       state += action.payload;
//       return state;
//     }
//     return state;
//   },
