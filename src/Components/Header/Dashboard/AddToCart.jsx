import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartIt } from "../../../Store/Authciation/Authslice";

const Cart = () => {
  const myData = useSelector((state) => state.authSlice.CartData);
  const [qunatity, setqunatity] = useState(Array(myData.length).fill(1))
  console.log("quaaa", qunatity);
  const dispatch = useDispatch();
 
  console.log("my cart", myData);
  const removeCartItem = (id) => {
    console.log("idgg", id);
    dispatch(removeCartIt(id));
  };



  const handleadd =(index)=>{
    console.log("ad work", index);
    const newquantity = [...qunatity];
    if (newquantity[index] > 1){
      newquantity[index]++;
      setqunatity(newquantity)
    }
  }
  const handleSub =(index)=>{
    const newquantity = [...qunatity];
    if (newquantity[index] > 1){
      newquantity[index]--;
      setqunatity(newquantity)
    }
  }
  return (
    <>
    {myData.length>0 ?  <div className="h-screen pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">
                  Cart Items
                </h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">
                  {myData.map((item, index)=>{
                    return(
                      <>
                      <div key={index} className="justify-between mb-6 rounded-lg  p-6 shadow-md sm:flex sm:justify-start object-cover h-auto w-auto">
                      <img
                        src={item.image_url}

                        className="w-[100px] h-[100px]  object-containf "
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {item.name}
                          </h2>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span onClick={()=>handleSub(index)} className="cursor-pointer rounded-l bg-white py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        
                              -
                            </span>
                            <button>{qunatity}</button>
                            <span onClick={()=>handleadd(index)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
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
                    )   
                  })}
                   
                  </div>
                  {/* Sub total */}
                  <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">$129.99</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      <p className="text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total</p>
                      <div className="">
                        <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                   
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                      Check out
                    </button>
                  </div>
                </div>
              </div> : <div className="emptycart text-center text-lg font-extrabold">
                <h2>Your Cart Is Empty</h2>
              </div> }
              
    </>
  );
};

export default Cart;
