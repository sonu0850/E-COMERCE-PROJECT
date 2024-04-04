import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import update from './../../../assets/updatepass.png'
import { useDispatch } from "react-redux";
import { upDate } from "../../../Store/Authciation/Authslice";
import { useParams } from "react-router-dom";

const ChangePassword = () => {
  const token = useParams();
  console.log("token", token);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      newpassword: "",
      conformpassword: "",
    },
    validationSchema: Yup.object({
      newpassword: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      conformpassword: Yup.string()
        .max(12, "Must be 12 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("newpassword"), null], "password not match"),
    }),
    onSubmit: (values) => {
      console.log("valueswwwwwwwwwwwwwwwwwww ", values, );
      dispatch(upDate({values:values, token:token}))
      
    },
  });

  return (
    <div className="flex justify-center ">
 <div className="leftimage">
          <img className=' w-[400px] h-[800px]' src={update} alt=""   />
        </div>
    <div className="rightcontent">
    <div className="updatebg flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-lg font-bold mb-4 text-center">Change Password</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="newpassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                New Password
              </label>
              <input
                id="newpassword"
                name="newpassword"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newpassword}
              />
              {formik.touched.newpassword && formik.errors.newpassword ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.newpassword}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="conformpassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                id="conformpassword"
                name="conformpassword"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.conformpassword}
              />
              {formik.touched.conformpassword &&
              formik.errors.conformpassword ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.conformpassword}
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ChangePassword;
