import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import '../layouts/forms.css';


export const Login = () => (

    <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
            console.log('Submitting', values);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required('Required'),
            password: Yup.string()
                .required('Required')
                .min(8, 'Password is too short, must be at least 8 characters')
                .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
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
                <h1>Login</h1>

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
                      <label htmlFor="email">Password</label>
                      <input
                          name="password"
                          type="password"
                          placeholder="Enter you Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.password && touched.password && "error"}
                      />
                      {errors.password && touched.password && (
                          <div className="Input-feedback">{errors.password}</div>
                      )}
                      <button className="btn"
                        type="button"
                        disabled={isSubmitting}>
                          Login
                      </button>
                      <div>
                        <nav className="bottom-links">
                          <Link className="forgot" to="../forgot">Forgot Password?</Link>
                          <Link className="create-account" to="../signup">Create Account</Link>
                        </nav>
                      </div>
                  </form>
              </div>
            );
        }}
    </Formik>
);
