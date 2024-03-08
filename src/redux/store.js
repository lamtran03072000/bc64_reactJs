import { configureStore } from '@reduxjs/toolkit';
import { numberReducer } from './reducers/numberReducer';
import fsizeReducer from './reducers/fsizeReducer';
export const store = configureStore({
  reducer: {
    // Chứa toàn bộ state global của ứng dụng
    number: numberReducer,
    img: (state = './img/products/black-car.jpg', action) => {
      if (action.type == 'HANDLE_CHANGE_CAR') {
        state = action.payload;
        return state;
      }
      return state;
    },
    fsize: fsizeReducer,
  },
});
