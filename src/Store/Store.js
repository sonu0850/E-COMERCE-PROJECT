import { configureStore } from '@reduxjs/toolkit'
import fakestore from './FakeStore/FakeStoreslice';
import authSlice from '../Store/Authciation/Authslice';

 const Store = configureStore({
  reducer: {
    authSlice,
    fakestore
  },
})

export default Store;