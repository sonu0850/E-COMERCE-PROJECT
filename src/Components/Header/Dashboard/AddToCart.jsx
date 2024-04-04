import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartIt } from "../../../Store/Authciation/Authslice";

const Cart = () => {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.authSlice.CartData);
  console.log("my cart", myData);
  const removeCartItem = (id) => {
    console.log("idgg", id);
    dispatch(removeCartIt(id));
  };
  return (
    <div className="">
      {myData.map((item, index) => {
        console.log("iiiiiiii", item);
        return (
          <>
            <div className="cartitem">
              <div className="first">
                {" "}
                <img src={item.image} alt="" width={150} />
              </div>
            </div>
            <button
              onClick={() => removeCartItem(item.id)}
              className=" bg-slate-500 text-white p-1 rounded-md ms-8"
            >
              Remove
            </button>
          </>
        ); 
      })}
    </div>
  );
};

export default Cart;
