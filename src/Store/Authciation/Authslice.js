import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import http from '../../Service/http/base_url'


import  { Toastify } from "../../Service/http/Toasify/TostifyContainer";
import { useEffect } from "react";



// SIGN UP
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


// LOG IN 

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
// FORGET PASSWORD 

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


// export const  UpdatePassword = createAsyncThunk('UpdatePassword/authSlice', async()=>{
//     try {
//         const response = await http.put(`/users/updatePassword`)
//     } catch (error) {
        
//     }
// })



// CHANGE PASSWORD 
export const  upDate = createAsyncThunk('upDate/authSlice', async({values, token})=>{
    console.log("val pass0", values);
    console.log("val pass0 token", token);
    try {
        const response = await http.put(`users/updatePassword/${token.token}`,{
            password: values.newpassword,
        })
        console.log("update",response);
        if (response.data.success=== true) {
            return response.data
            
        } 
    } catch (error) {
        return error.response.data
    }
})

// CART DATA
export const CartData = createAsyncThunk('/CartData/authSlice', async(data)=>{
    return data;
})


// REMOVE ITEM FROM CART
export const removeCartIt = createAsyncThunk('removeCartItem/authSlice', async(id)=>{
    return id;
   
})

// PROCEED TO CHECKOUT PAYMENT PAGE 

export const proceedCheckOut = createAsyncThunk('proceedCheckOut/authSlice', async(finalprice)=>{
console.log("prrr", finalprice);
    return finalprice;
   
})






 const authSlice = createSlice({
    name:"authSlice",
    initialState:{
      
        // Cart:[],
        loading: false,
        CartData:[],
        Checkout:[],

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

    // cart Data
        .addCase(CartData.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(CartData.fulfilled,(state,action)=>{
            const findItem = state.CartData.find((item)=> item.id === action.payload.id);
            if (findItem) {
                return;
                
            } else {
                
                state.CartData = [...state.CartData, action.payload]
            }
           
        state.loading = false


        })
        .addCase(CartData.rejected,(state,action)=>{
            state.loading= false

        })
    // REMOVE ITEM FROM CART    
        .addCase(removeCartIt.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(removeCartIt.fulfilled,(state,action)=>{
           state.CartData = state.CartData.filter((item, index)=> item.id !== action.payload)
           
        state.loading = false


        })
        .addCase(removeCartIt.rejected,(state,action)=>{
            state.loading= false

        })

        // UPDATE PASSWORD
        .addCase(upDate.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(upDate.fulfilled,(state,action)=>{
           console.log(" upload aciton", action);
           if (action.payload.success === true) {
            Toastify({value:true, msg:action.payload.message})
            
        } else {
            Toastify({value:false, msg:action.payload.data.message})
            
        }
        state.loading = false


        })
        .addCase(upDate.rejected,(state,action)=>{
            state.loading= false

        })


        // FINAL PROCCED TO CHECKOUT
        .addCase(proceedCheckOut.pending,(state,action)=>{
            state.loading= true

        })
        .addCase(proceedCheckOut.fulfilled, (state, action) => {
            console.log("action proceed", action.payload);
            state.Checkout = action.payload;
          
            state.loading = false;
      

        })
        .addCase(proceedCheckOut.rejected,(state,action)=>{
            state.loading= false

        })
        
    }

}) 

export default authSlice.reducer