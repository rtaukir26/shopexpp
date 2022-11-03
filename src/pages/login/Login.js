import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import { useFormik } from "formik";
import "./login.css";
import { LoginvalidateSchema } from "../../schema";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useNavigate();
  // const [input, setInput] = useState({ name: "", password: "" });
  // const inputChange = (e) => {
  //   setInput({ [e.target.name]: e.target.value });
  // };
  //handleSubmit
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   console.log(input);
  // };
  //formik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginvalidateSchema,
      onSubmit: (value, action) => {
        // console.log(value);
        // axios
        //   .post("https://dummyjson.com/auth/login", {
        //     // .post("http://localhost:3005/user", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       // username: value.email,
        //       // password: value.password,
        //       username: "taukir",
        //       password: "0lelpl01",
        //       // expiresInMins: 60, // optional
        //     }),
        //   })
        //   .then((resp) => console.log(resp));
        // .then((res) => console.log(res));
        // .then((res) => res.json())

        // axios
        //   .post("http://localhost:8007/login", {
        //     email: value.email,
        //     password: value.password,
        //   })
        //   .then((resp) => {
        //     if (resp.status === 201) {
        //       let token = Math.floor((Math.random() * 100) + 1);
        //       console.log(token)
        //     }
        //   });
        let token = Math.floor(Math.random() * 1000000 + 1);
        localStorage.setItem("token", JSON.stringify(token));
        // console.log(token);
        history("/home");
        action.resetForm();
      },
    });
  return (
    <>
      {/* <Navbar /> */}
      <div className="login_container">
        <div className="login_div">
          <p className=" login_para ">Login</p>
          <form className="form_group" onSubmit={handleSubmit}>
            <div className="">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="form_control"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {errors.name && touched.name ? <p>{errors.name}</p> : null} */}
              {errors.email && touched.email ? (
                <div className="input_error_div">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <span>
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="form_control"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div className="input_error_div">{errors.password}</div>
              ) : null}
            </div>
            <Link>
              <p>Forgot password?</p>
            </Link>
            <div className="submitBtn_signup_div">
              <button type="submit" className="submit_btn">
                Submit
              </button>
              <p>
                No account? |<Link>Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
