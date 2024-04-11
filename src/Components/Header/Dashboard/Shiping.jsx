import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Shiping = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string()
          .required('Zip Code is required')
          .matches(/^[0-9]{5}$/, 'Invalid Zip Code'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission here
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Field type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Field type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <Field type="text" id="address" name="address" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <Field type="text" id="city" name="city" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="city" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <Field type="text" id="state" name="state" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="state" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <Field type="text" id="zip" name="zip" className="mt-1 p-2 w-full border" />
            <ErrorMessage name="zip" component="div" className="text-red-600 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Shiping;
