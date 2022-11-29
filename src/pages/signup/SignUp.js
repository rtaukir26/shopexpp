import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { registerValidate } from "../../schema/index";
import Error_Message from "../../components/error/ErrorMessage";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./SignUp.css";

const SignUp = () => {
  const history = useNavigate();
  // const [register, setRegister] = useState([]);
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      history("/");
    }
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, action) => {
    console.log("values", values);
    // let result = await fetch("http://localhost:5000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: values.name,
    //     email: values.email,
    //     password: values.password,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // result =await result.json();
    // console.log("backend result: ", result);
    // localStorage.setItem("user",JSON.stringify(result))
    // if(result)
    // {
    //   history("/")
    // }

    //fake login api
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json)).catch(err=>console.log(err))


    action.resetForm();
  };

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            {/* <Field
              type="text"
              name="name"
              value={values.name}
              placeholde="Name"
            /> */}
            <Field
              type="email"
              name="email"
              value={values.email}
              placeholde="Email"
            />
            <Field
              type="password"
              name="password"
              value={values.password}
              placeholde="password"
            />
              <button type="submit" className="btn btn-primary btn_register">
                Register
              </button>
          </Form>
        )}
      </Formik>
      {/* <div className="loader_outer_div">

        <div className="ring1"></div>
        <div className="ring2"></div>
        <div className="ring3"></div>

        <div className="loading_div">
          <span className="mx-1 loading_span">L</span>
          <span className="mx-1 loading_span">O</span>
          <span className="mx-1 loading_span">A</span>
          <span className="mx-1 loading_span">D</span>
          <span className="mx-1 loading_span">I</span>
          <span className="mx-1 loading_span">N</span>
          <span className="mx-1 loading_span">G</span>
        </div>
      </div> */}
    </div>
  );
};

export default SignUp;
