import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import http from "../../Service/http/base_url";

export const  signUp=createAsyncThunk("/authSlice/signUp",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await axios.post('http://localhost:8080/users/register', {
        firstName:value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
    })
    if (response.status===200) {
        return response.data
        
    } else {
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})
export const  login =createAsyncThunk("/authSlice/login",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await axios.post('http://localhost:8080/users/login'+value, )
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
        .addCase(Register.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(Register.fulfilled,(state,action)=>{
            state.loading= false
            state.Data = action.payload

        })
        .addCase(Register.rejected,(state,action)=>{
            state.loading= true

        })
    }

})

export default authSlice.reducer