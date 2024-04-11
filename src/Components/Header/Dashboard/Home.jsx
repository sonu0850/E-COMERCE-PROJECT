import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FakeStoreslice, {
  fakeData,
} from "../../../Store/FakeStore/FakeStoreslice";
import { motion } from "framer-motion";
import { CartData } from "../../../Store/Authciation/Authslice";
import { NavLink, useNavigate } from "react-router-dom";
import Pizza from "./Pizza";
import Skelton from '../../../Service/http/Loader/Loader'
import { Toastify } from "../../../Service/http/Toasify/TostifyContainer";


const Home = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  console.log("token hine", token);
  
  // const [cartshow, setcartshow] = useState(false)
  const Cartfind = useSelector((state) => state.authSlice.CartData);
  const Loader = useSelector((state) => state.fakestore.loading);
  console.log("loader", Loader);

  const dispatch = useDispatch();
  
  const Data = useSelector((state) => state.fakestore.Data);
  console.log("home pizza", Data);

  useEffect(() => {
    dispatch(fakeData(Pizza));
    
  }, []);

  const addToCart =(item)=>{
    if (token) {

      
    dispatch(CartData(item))
    } else {
      Toastify({value:false, msg:"Please Login First"})
      navigate("/Login")
    }

    // setcartshow(true)
  }
  
  return (
    <>
    
     {Loader ? <Skelton/>: <motion.div
        // initial={{ opacity: 0, scale: 0.6 }}
        // animate={{ opacity: 1, y: 10, scale: 1 }}
        // transition={{ delay: 0.6, duration: 1 }}
        className="grid  grid-cols-1 md:grid-cols-4 justify-center items-center  gap-3  "
      >
        {Data.map((item, id) => { 
          return (
            <div key={id} className=" m-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img
                  className="w-full h-auto  object-contain" // Adjust width, height, and object-fit as needed
                  src={item.image_url}
                  alt="Product"
                />
                <div className="px-6 py-2">
                  <div className="font-bold text-sm mb-2">
                    {item.name.slice(0, 15)}...
                  </div>
                  <p className="text-gray-700 text-base">
                    {/* {item.description} * */}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 text-white">
                  <span className="inline-block text-white bg-[#e96d4e] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    $ {item.price}
                  </span>
                  <span className="inline-block text-white bg-[#3859c4] rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                   {/* <button >View Cart</button>  */}
                   <button onClick={()=>addToCart(item)}>{Cartfind.find((cartitem)=> cartitem.id === item.id)? <NavLink to="/Cart" >view cart</NavLink>  : "add to Cart"}</button> 
                    
                    
                    {/* <button onClick={()=>setCardData((prev)=>([...prev, item]))}>Add to Card</button> */}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>}
    </>
  );
};

export default Home;
