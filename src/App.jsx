
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Header/Navbar'
import Login from './Components/Header/Auth/Login'
import Home from './Components/Header/Dashboard/Home'
import SignupForm from './Components/Header/Auth/Signup'
import LogIn from './Components/Header/Auth/Login'

import Contact from './Components/Header/Dashboard/Contact'

import TostifyContainer from './Service/http/Toasify/TostifyContainer'
import { Suspense, lazy } from 'react'
import Cart from './Components/Header/Dashboard/AddToCart'
import Pizza from './Components/Header/Dashboard/Pizza'
import Checkout from './Components/Header/Dashboard/Checkout'
import CartC from './Components/Header/Dashboard/Checkout'
import AboutPage from './Components/Header/Dashboard/AboutPage'
const ChangePassword = lazy(()=> import ('./Components/Header/Auth/UpdatePassword')) 
const Chatapp = lazy(()=> import  ('./Components/Header/Dashboard/Chatap')) 
const RouteGuard = lazy(()=> import ('./Service/http/Routeguard/Routeguard'  )) 
const  Loader = lazy(()=> import ('./Service/http/Loader/Loader')) 
const  Forgot = lazy(()=> import ('./Components/Header/Auth/Forgot') )  

// import 'react-loading-skeleton/dist/skeleton.css'



function App() {
 
 const token = localStorage.getItem("token");

  return (
 <>

<TostifyContainer/>

{/* <Skeleton count={10} /> */}
{/* <Skeltont/> */}

 <Navbar/>
<Suspense fallback={<Loader/>}>
<Routes>
<Route path='/' element={<Home/>}/>
{/* <Route path='/' element={<RouteGuard Component={Home}/>}/> */}
<Route path='/contact' element={<RouteGuard Component={Contact}/>}/>
<Route path='/About' element={<RouteGuard Component={AboutPage}/>}/>
<Route path='/Login' element={token ? <Navigate to="/" replace={true} /> :<LogIn/>}/>
<Route path='/Signup' element={token ? <Navigate to="/" replace={true} /> :<SignupForm/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path='/Forget' element={<Forgot/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path='/Cart' element={<Cart/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path='/Chat' element={<Chatapp/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path="/updatePassword/:token"  element={<ChangePassword/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path="/Checkout"  element={<Checkout/>}/>                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                            

 </Routes>
</Suspense>
 </>
  )
}

export default App
