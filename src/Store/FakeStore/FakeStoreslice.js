import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fakeData  = createAsyncThunk('fakeData/fakestore', async()=>{
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log("response", response);
return response.data
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
            state.loading= false
            state.Data = action.payload

        })
        .addCase(fakeData.rejected,(state,action)=>{
            state.loading= true

        })
    }

})

export default FakeStore.reducer