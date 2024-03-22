import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RouteGuard = (props) => {
   const {Components} =props

   const [login, setlogin] = useState(false)
   const token = localStorage.getItem('token')
   const navigate = useNavigate();  
   useEffect(()=>{
    if (token) {
        setlogin(false)
    } else {
        setlogin(true)
        navigate('/Login')
    }
   })
    
   
  return (
    <div>
      dsfsdf
    </div>
  )
}

export default RouteGuard
