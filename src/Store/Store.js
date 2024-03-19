import { configureStore } from '@reduxjs/toolkit'
import fakestore from './FakeStore/FakeStoreslice';

 const Store = configureStore({
  reducer: {
    fakestore
  },
})

export default Store;