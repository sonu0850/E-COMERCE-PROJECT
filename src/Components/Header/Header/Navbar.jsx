
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
    localStorage.removeItem("token")
    navigate("/")
  }

  const addtocard =()=>{
    navigate('/Cart')
  }
  return (
   <>
 <motion.div initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1, duration:1}} className="container-fluid">
<div className="navbar  flex justify-between px-5 items-center py-3 text-black">
  <NavLink to={'/'}><div className="logo"><img src={amazon} alt=""  width={130}/></div></NavLink>
 {token &&  <div className="content flex gap-3">
    <NavLink to='/'><h2>Home</h2></NavLink>
    <NavLink to='/About'><h2>About</h2></NavLink>
    <NavLink to='/contact'><h2>Contact Us</h2></NavLink>
  

  </div>}
  <div className="btn flex gap-3 items-center">
 {token ? <NavLink to='/Login'> <button className='p-1 rounded-xl px-3 text-white  bg-black' onClick={logout}>Log Out</button></NavLink> : <NavLink to='/Login'> <button className='p-1 rounded-xl px-3 text-white  bg-black'>Log In</button></NavLink>}
 
 {token && <span onClick={addtocard} className="relative inline-block">
 <TiShoppingCart className='text-3xl' />
  <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{myData.length}</span>
</span>}
          {/* <NavLink to="/Signup">  <button className='p-1 rounded-xl text-white  bg-black'>Sign Up</button></NavLink> */}
  </div>
</div>
 </motion.div>
   </> 
   
    
  )
}

export default Navbar
