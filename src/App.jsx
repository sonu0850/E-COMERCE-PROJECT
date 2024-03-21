
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


function App() {
 
 

  return (
 <>

<TostifyContainer/>

 <Navbar/>
 <Routes>
<Route path='/Login' element={<LogIn/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Signup' element={<SignupForm/>}/>
<Route path='/' element={<Home/>}/>

 </Routes>
 </>
  )
}

export default App
