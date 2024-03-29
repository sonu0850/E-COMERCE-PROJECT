import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FakeStoreslice, {
  fakeData,
} from "../../../Store/FakeStore/FakeStoreslice";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState([])

  console.log("card data", cardData);
  console.log("card length", cardData.length);
  const Data = useSelector((state) => state.fakestore.Data);

  useEffect(() => {
    dispatch(fakeData());
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, y: 10, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid  grid-cols-1 md:grid-cols-5 justify-center items-center  gap-3 "
      >
        {Data.map((item, id) => {
          return (
            <div key={id} className="mt-16">
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img
                  className="w-full h-[300px]  object-contain" // Adjust width, height, and object-fit as needed
                  src={item.image}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-sm mb-2">
                    {item.title.slice(0, 15)}...
                  </div>
                  <p className="text-gray-700 text-base">
                    {/* {item.description} */}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#FFA41C] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    $ {item.price}
                  </span>
                  <span className="inline-block bg-[#FFD814] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                    <button onClick={()=>setCardData((prev)=>([...prev, item]))}>Add to Card</button>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Home;
