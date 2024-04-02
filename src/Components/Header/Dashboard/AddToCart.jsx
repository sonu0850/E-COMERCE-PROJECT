import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()
  const myData = useSelector((state)=>state.authSlice.CartData)
  console.log("my cart", myData);
  const removeCartItem = (id)=>{
dispatch(removeCartItem(id))
  }
  return (
    <div className='grid grid-cols-2'>
     {myData.map((item)=>{
      console.log("iiiiiiii", item);
      return(
        <>
        <div className=''>
          <img src={item.image} alt="" width={100}/>
          <button className='p-1 rounded-xl px-3 text-white  bg-black' onClick={()=>removeCartItem(item.id)}>remove</button>
       
        </div>
        </>
      )
     })}
    </div>
  )
}

export default Cart
