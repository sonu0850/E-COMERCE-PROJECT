import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Forget, Login } from "../../../Store/Authciation/Authslice";

const Forgot = () => {

  const disptach = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required(" Email Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      disptach(Forget(values)).unwrap().then((res)=>{
        console.log("respon unwarpa forge", res);
        if (res.data.success === true) {
            resetForm()
        } else {
            
        }
      })
      
    },
  });

  return (
    <>
      <motion.div
        initial={{ x: -1300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="signup md:flex md:justify-center md:items-center"
      >
        <div className="leftimage">
          <img
            className=" w-[600px] h-[700px]"
            src="https://st3.depositphotos.com/3382541/12567/v/450/depositphotos_125678798-stock-illustration-stressed-young-man-holding-his.jpg"
            alt=""
          />
        </div>
        <div className="form">
          <h2 className="   text-3xl md:text-6xl">Forget Password</h2>
          <form
            onSubmit={formik.handleSubmit}
            className="bred-200 max-w-xl md:w-[600px]  p-4 w-full"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="block">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="p-2 border rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="btnatuh flex gap-4">
              <button
                type="submit"
                className="mt-4 bg-[#EA4C89] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Forgot;
