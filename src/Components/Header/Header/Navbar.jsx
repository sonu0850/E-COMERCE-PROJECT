
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import amazon from '../../../assets/amazon.png'
import { TiShoppingCart } from "react-icons/ti";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const myData = useSelector((state)=>state.authSlice.CartData)
  const token = localStorage.getItem('token')
  console.log("tokenn", token);
  const navigate = useNavigate();

  const logout =()=>{
    localStorage.removeItem("token");
    navigate("/");
  }

  const addtocard =()=>{
    navigate('/Cart')
  }
  return (
   <>
 <div  className="container-fluid">
<div className="navbar  flex justify-between px-5 items-center py-1 text-black">
  <NavLink to={'/'}><div className="logo"><img src="https://sharpsheets.io/wp-content/uploads/2023/04/dominos_social_logo-1024x1024.jpg" alt=""  width={130}/></div></NavLink>
 {token &&  <div className="content flex gap-9 text-xl font-semibold">
    <NavLink to='/'><h2>Home</h2></NavLink>
    <NavLink to='/About'><h2>About</h2></NavLink>
    <NavLink to='/contact'><h2>Contact Us</h2></NavLink>
    <NavLink to='/Service'><h2>Services</h2></NavLink>
  

  </div>}
  <div className="btn flex gap-3 items-center">
 {token ? <button className='p-1 rounded-xl px-3 text-white  bg-black' onClick={()=>logout()}>Log Outdd</button> : 
  <button className='p-1 rounded-xl px-3 text-white  bg-black' onClick={()=> navigate("/Login")} >Log In</button>}
 
 {token && <span onClick={addtocard} className="relative inline-block">
 <TiShoppingCart className='text-3xl' />
  <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{myData.length}</span>
</span>}
          {/* <NavLink to="/Signup">  <button className='p-1 rounded-xl text-white  bg-black'>Sign Up</button></NavLink> */}
  </div>
</div>
 </div>
   </> 
   
    
  )
}

export default Navbar
