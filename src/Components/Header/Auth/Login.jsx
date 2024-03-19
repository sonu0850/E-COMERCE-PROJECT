import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'

const LogIn = () => {
 
  const formik = useFormik({
    initialValues: {
     
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      
        password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
     
    }),
    onSubmit: values => {
      console.log(values);
      console.log("value", values);
    },
  });

  return (
    <>
    <motion.div initial={{x:-1300, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, duration:1}}  className="signup md:flex md:justify-center md:items-center">
        <div className="leftimage">
          <img className=' w-[600px] h-[700px]' src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=1800&t=st=1710499310~exp=1710499910~hmac=fab216093021bf3759d22cdc94a7666d2708b8f6b5ff99900b8fd6888b78eed1" alt=""   />
        </div>
        <div className="form">
          <h2 className='text-6xl'>Log In</h2>
        <form onSubmit={formik.handleSubmit} className="bred-200 max-w-xl md:w-[600px]  p-4 w-full">
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
        <label htmlFor="password" className="block">
         Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="p-2 border rounded"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
       
      </div>

      <div className="btnatuh flex gap-4">
      <button type="submit" className="mt-4 bg-[#EA4C89] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full">
        Submit
      </button>
      <NavLink to='/Signup'><button type="submit" className="mt-4 bg-[#EA4C89] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button></NavLink>
      </div>
    </form>
        </div>
      </motion.div>
    </>
  );
};

export default LogIn;
