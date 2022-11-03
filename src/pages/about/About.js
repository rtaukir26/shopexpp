import React from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import CompImage from "../../images/brand-image.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../footer/Footer";
import { validateSchema } from "../../schema";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
};

const About = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validateSchema,
      onSubmit: (value, action) => {
        console.log(value);

        axios
          // .post("https://dummyjson.com/auth/login", {
          .post("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: value.email,
              password: value.password,
              // username: "kminchelle",
              // password: "0lelplR",
              // expiresInMins: 60, // optional
            }),
          })
          .then((res) => console.log(res));

        action.resetForm();
      },
    });

  return (
    <>
      <Navbar />
      <div className="mt-5 container">
        <div>
          <h3 className="text-center">About Us</h3>
        </div>
        <div className="mt-5 d-flex  p-2">
          <div className="p-2">
            <p>
              <strong>Shop Express </strong>is a brand shoping application for
              the users. This handy tool helps you create dummy text for all
              your layout needs. We are gradually adding new functionality and
              we welcome your suggestions
            </p>
          </div>
          <div className="width-500  p-2">
            <img src={CompImage} style={{ width: "450px" }} />
          </div>
        </div>
        <div>
          <div>
            <h4>Leave your comments here</h4>
          </div>
          <div className="mt-4 py-2 form_container">
            <form onSubmit={handleSubmit}>
              <div className="input_block">
                <label htmlFor="name" className="input_label  mx-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </div>
              <div className="input_block">
                <label htmlFor="email" className="input_label mx-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <div className="">
                <button type="submit" className="btn btn-light ms-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
