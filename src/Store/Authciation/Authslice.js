import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  signUp=createAsyncThunk("/authSlice/signUp",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await axios.post('http://localhost:8080/users/register',value)
    if (response.status===200) {
        return response.data
        
    } else {
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})







 const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        Data:[],
        loading: false
    },
    extraReducers(builder){
        builder
        .addCase(signUp.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(signUp.fulfilled,(state,action)=>{
           console.log("fullfiled", action);

        })
        .addCase(signUp.rejected,(state,action)=>{
            state.loading= true

        })
        
    }

})

export default authSlice.reducer