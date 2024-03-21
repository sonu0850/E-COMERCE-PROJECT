import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import  { Toastify } from "../../Service/http/Toasify/TostifyContainer";

export const  signUp=createAsyncThunk("/authSlice/signUp",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await axios.post('http://localhost:8080/users/register',value);
    console.log("response", response);
   
 
    if (response.status===200) {
        
        
        return response.data
        
    } else {
        if(response.status===400){
            Toastify({value:false, msg:response.data.message})
        }
        
        
       
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})



export const  Login=createAsyncThunk("/authSlice/Login",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await axios.post('http://localhost:8080/users/login',value)
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


        })
        .addCase(Login.rejected,(state,action)=>{
            state.loading= true

        })
        
    }

})

export default authSlice.reducer