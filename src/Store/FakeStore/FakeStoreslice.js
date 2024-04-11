import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const fakeData = createAsyncThunk('fakeData/fakestore', async (Pizza, thunkAPI) => {
    console.log("pizza", Pizza);
    try {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Pizza);
            }, 2000); // 3 seconds delay
        });
    } catch (error) {
        // Handle error if needed
    }
});


 const FakeStore = createSlice({
    name:"fakestore",
    initialState:{
        Data:[],
        loading: false
    },
    extraReducers(builder){
        builder
        .addCase(fakeData.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(fakeData.fulfilled,(state,action)=>{
            console.log("action piza", action);
            state.loading= false
            state.Data = action.payload

        })
        .addCase(fakeData.rejected,(state,action)=>{
            state.loading= true

        })
    }

})

export default FakeStore.reducer