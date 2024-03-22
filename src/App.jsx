
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
import { Suspense } from 'react'
import RouteGuard from './Service/http/Routeguard/Routeguard'

// import 'react-loading-skeleton/dist/skeleton.css'



function App() {
 
 

  return (
 <>

<TostifyContainer/>

{/* <Skeleton count={10} /> */}
{/* <Skeltont/> */}

 <Navbar/>
<Suspense fallback={'loading....'}>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/' element={<RouteGuard Component={Home}/>}/>
<Route path='/contact' element={<RouteGuard Component={Contact}/>}/>
<Route path='/About' element={<RouteGuard Component={About}/>}/>
<Route path='/Login' element={<LogIn/>}/>
<Route path='/Signup' element={<SignupForm/>}/>

 </Routes>
</Suspense>
 </>
  )
}

export default App
