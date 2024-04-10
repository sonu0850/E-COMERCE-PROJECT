import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { proceedCheckOut, removeCartIt } from "../../../Store/Authciation/Authslice";
import {useNavigate} from 'react-router-dom'
import Checkout from "./Checkout";

const Cart = () => {
  const navigate = useNavigate()
  const myData = useSelector((state) => state.authSlice.CartData);
  const [qunatity, setQuantity] = useState(myData.map((item) => ({
    itemId: item.id,
    quantity: 1
  })));
  const dispatch = useDispatch();

  const removeCartItem = (id) => {
    dispatch(removeCartIt(id));
  };

  const handleAdd = (index) => {
    const newQuantities = [...qunatity];
    newQuantities[index].quantity++;
    setQuantity(newQuantities);
  };

  const handleSub = (index) => {
    const newQuantities = [...qunatity];
    if (newQuantities[index].quantity > 1) {
      newQuantities[index].quantity--;
      setQuantity(newQuantities);
    }
  };

  const subtotalMin = qunatity.reduce((total, currentQuantity) => {
    const item = myData.find((item) => item.id === currentQuantity.itemId);
    return total + (item?.price || 0) * currentQuantity.quantity;
  }, 0);

  const subtotal = subtotalMin.toFixed(2)


  const proceedtocheckout =(finalprice)=>{
    console.log("chl rha ");
    dispatch(proceedCheckOut(finalprice))
    navigate("/Checkout")
  }

 

  return (
    <>
      {myData.length > 0 ? (
        <div className="h-screen pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {myData.map((item, index) => {
                const quantityItem = qunatity.find((q) => q.itemId === item.id);
                return (
                  <>
                    <div
                      key={index}
                      className="justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start object-cover h-auto w-auto"
                    >
                      <img
                        src={item.image_url}
                        className="w-[100px] h-[100px] object-contain"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {item.name}
                          </h2>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span
                              onClick={() => handleSub(index)}
                              className="cursor-pointer rounded-l bg-white py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              -
                            </span>
                            <span>{quantityItem?.quantity || 1}</span>
                            <span
                              onClick={() => handleAdd(index)}
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              +
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">{item.price} $</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              onClick={() => removeCartItem(item.id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{subtotal} $</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-green-700">Free</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${subtotal } USD
                  </p>
                </div>
              </div>
              <button onClick={()=>proceedtocheckout(subtotal)} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Proceed To Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptycart text-center text-lg font-extrabold">
          <h2>Your Cart Is Empty</h2>
        </div>
      )}
      
    </>
  );
};

export default Cart;