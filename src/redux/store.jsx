import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/slices'; // adjust the import path as needed

export const store = configureStore({
  reducer: {
    form: formReducer,
    // Add other reducers here as you expand your app
  },
});

export default store;