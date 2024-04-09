import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import Pizza from "../../Components/Header/Dashboard/Pizza";

export const fakeData  = createAsyncThunk('fakeData/fakestore', async(Pizza)=>{
    console.log("pizza", Pizza);
    try {
       
        
return Pizza
    } catch (error) {
        
    }
})


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