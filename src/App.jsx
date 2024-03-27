
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Header/Navbar'
import Login from './Components/Header/Auth/Login'
import Home from './Components/Header/Dashboard/Home'
import SignupForm from './Components/Header/Auth/Signup'
import LogIn from './Components/Header/Auth/Login'
import Navbartwo from './Components/Header/Header/Navbartwo'
import Contact from './Components/Header/Dashboard/Contact'
import About from './Components/Header/Dashboard/About'
import TostifyContainer from './Service/http/Toasify/TostifyContainer'
import { Suspense, lazy } from 'react'
const RouteGuard = lazy(()=> import ('./Service/http/Routeguard/Routeguard'  )) 
const  Loader = lazy(()=> import ('./Service/http/Loader/Loader')) 
const  Forgot = lazy(()=> import ('./Components/Header/Auth/Forgot') )  

// import 'react-loading-skeleton/dist/skeleton.css'



function App() {
 
 

  return (
 <>
<TostifyContainer/>

{/* <Skeleton count={10} /> */}
{/* <Skeltont/> */}

 <Navbar/>
<Suspense fallback={<Loader/>}>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/' element={<RouteGuard Component={Home}/>}/>
<Route path='/contact' element={<RouteGuard Component={Contact}/>}/>
<Route path='/About' element={<RouteGuard Component={About}/>}/>
<Route path='/Login' element={<LogIn/>}/>
<Route path='/Signup' element={<SignupForm/>}/>                                                                                                                                                                                                                                                                                                                                                                                
<Route path='/Forget' element={<Forgot/>}/>                                                                                                                                                                                                                                                                                                                                                                                

 </Routes>
</Suspense>
 </>
  )
}

export default App
