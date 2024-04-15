import React from 'react'
import Styles from '../Loader/Loader.module.css'
import {motion} from "framer-motion"

const Loader = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
   <>
   
   <div className="flex min-h-screen grid grid-cols-1 m-auto md:grid-cols-4 md:gap-3 ">
{numbers.map(()=>{
  return(
    <div className="w-1/9 m-3 md:m-0 ">
    <div className="rounded overflow-hidden shadow-lg animate-pulse">
      <div className="h-[350px] bg-gray-300" />
      <div className="px-6 py-4">
        <div className="h-5 bg-gray-300 mb-2" />
       
      </div>
      <div className="px-6 pt-2 pb-2 flex gap-4 rounded-xl">
        <div className="h-[25px] bg-gray-300 w-1/4 mb- rounded-xl" />
        <div className="h-[25px] bg-gray-300 w-[120px]    rounded-xl" />
       
      </div>
    </div>
  </div>
  )
})}
</div>

   </>

   
  )
}

export default Loader
