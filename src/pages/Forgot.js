import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import '../layouts/forms.css';


export const Forgot = () => (

  <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
          console.log('Submitting', values);
      }}

      validationSchema={Yup.object().shape({
          email: Yup.string()
              .email()
              .required('Required')
      })}
  >
      {props => {
          const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
          } = props;
          return (
            <div>
              <h1>Forgot Password</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter you Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="Input-feedback">{errors.email}</div>
                    )}
                    <button className="btn"
                      type="button"
                      disabled={isSubmitting}>
                        Reset Password
                    </button>
                </form>
            </div>
          );
      }}
  </Formik>
);
