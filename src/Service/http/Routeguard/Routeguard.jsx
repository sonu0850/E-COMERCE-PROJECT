import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RouteGuard = (props) => {
   const {Component} =props

   const [login, setlogin] = useState(false)
   const token = localStorage.getItem('token')
   const navigate = useNavigate();  
   useEffect(()=>{
    if (token) {
        setlogin(true)
    } else {
        setlogin(false)
        navigate('/')
    }
   },[token])
    
   
  return (
      <>  login && <Component/> replace </>
  )
}

export default RouteGuard
