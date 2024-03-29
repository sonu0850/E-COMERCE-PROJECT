import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import http from '../../Service/http/base_url'

import  { Toastify } from "../../Service/http/Toasify/TostifyContainer";

export const  signUp=createAsyncThunk("/authSlice/signUp",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await http.post('/users/register',value);
    console.log("response", response);
   
 
    if (response.status===200) {
        
        
        return response.data
        
    } else {
       
        
        
       
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})



export const  Login=createAsyncThunk("/authSlice/Login",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await http.post('/users/login',value)
    if (response.status===200) {
        return response.data
        
    } else {
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})

export const  Forget =createAsyncThunk("/Forget/authSlice", async(data)=>{
    console.log("dddd", data);
    try {
        const response = await http.post("/users/forgotPassword" , data)
        
        console.log("ressss fortge", response);
        return response
    } catch (error) {
        return error.response
        
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
        // SIGN UP
        .addCase(signUp.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(signUp.fulfilled,(state,action)=>{
         state.loading = false
        if (action.payload.success ===true) {
            Toastify({value:true, msg:action.payload.message})
            
        } else {
            Toastify({value:false, msg:action.payload.message})
            
        }
        state.loading = false
       

        })
        .addCase(signUp.rejected,(state,action)=>{
            state.loading= true

        })

    // LOG IN
        .addCase(Login.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(Login.fulfilled,(state,action)=>{
           console.log("fullfiled", action);
           if (action.payload.success ===true) {
            Toastify({value:true, msg:action.payload.message})
            
        } else {
            Toastify({value:false, msg:action.payload.message})
            
        }
        state.loading = false


        })
        .addCase(Forget.rejected,(state,action)=>{
            state.loading= false

        })
    // FORGOT PASSWORD
        .addCase(Forget.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(Forget.fulfilled,(state,action)=>{
           console.log("forget aciton", action);
           if (action.payload.status === 200) {
            Toastify({value:true, msg:action.payload.data.message})
            
        } else {
            Toastify({value:false, msg:action.payload.data.message})
            
        }
        state.loading = false


        })
        .addCase(Login.rejected,(state,action)=>{
            state.loading= false

        })
        
    }

}) 

export default authSlice.reducer