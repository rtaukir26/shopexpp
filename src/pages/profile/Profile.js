import React from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import userPic from "../../images/xz2.jpg";
import { Formik, Form, Field } from "formik";
import { profileValidate } from "../../schema/index";
import Error_Message from "../../components/error/ErrorMessage";
import { useState } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails);

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    number: "",
    dob: "",
    age: "",
    gender: "",
  };
  const handleSubmit = async (values, action) => {
    // setUserDetails({values});
    action.resetForm();
    console.log(values);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({
        Name: values.name,
        Email: values.email,
        password: values.password,
      }),
      headers:{
        "Content-type":"application/json"
      }
    });
    result=await result.json()
    console.log(result)
  };
  return (
    <>
      <Navbar />
      <div className="profile_conatiner">
        <h4 className="text-center">User Details</h4>
        <div className="progile_div">
          <div className="profile_left">
            <h5>Enter Details</h5>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={profileValidate}
                onSubmit={handleSubmit}
                // onSubmit={(values,action) => {
                //   setUserDetails([values])
                //   action.resetForm()
                //   console.log(values);
                // }}
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
                  <Form onSubmit={handleSubmit}>
                    <div className="input_con">
                      <div className="input_flex">
                        <div className="input_block">
                          <label htmlFor="fname" className="input_label">
                            First name
                          </label>
                          <Field
                            type="text"
                            name="fname"
                            //   autoComplete="off"
                            // id="number"
                            value={values.fname}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                          <Error_Message name="fname" />
                        </div>
                        <div className="input_block">
                          <label htmlFor="lname" className="input_label">
                            Last name
                          </label>
                          <Field
                            type="text"
                            name="lname"
                            //   autoComplete="off"
                            // id="number"
                            value={values.lname}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                          <Error_Message name="lname" />
                        </div>
                      </div>
                      <div className="input_block">
                        <label htmlFor="email" className="input_label">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          value={values.email}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        <Error_Message name="email" />
                      </div>
                      <div className="input_block">
                        <label htmlFor="number" className="input_label">
                          Contact number
                        </label>
                        <Field
                          type="number"
                          name="number"
                          // autoComplete="off"
                          // id="number"
                          // placeholder="Last Name"
                          value={values.number}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        <Error_Message name="number" />
                      </div>

                      <div className="input_flex">
                        <div className="input_block">
                          <label htmlFor="dob" className="input_label">
                            DOB
                          </label>
                          <Field
                            type="date"
                            name="dob"
                            autoComplete="off"
                            id="dob"
                            // value={values.dob}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                          <Error_Message name="dob" />
                        </div>
                        <div className="input_block">
                          <label htmlFor="age" className="input_label">
                            Age
                          </label>
                          <Field
                            type="number"
                            name="age"
                            autoComplete="off"
                            id="age"
                            value={values.age}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                          />
                          <Error_Message name="age" />
                        </div>
                      </div>

                      <div className="input_block gender_block">
                        <label htmlFor="gender" className="gender_label">
                          Gender
                        </label>
                        <label htmlFor="gender" className="_gender">
                          Male
                          <Field
                            type="radio"
                            name="gender"
                            autoComplete="off"
                            id="male"
                            value="Male"
                          />
                        </label>
                        <label htmlFor="" className="_gender">
                          Female
                          <Field
                            type="radio"
                            name="gender"
                            autoComplete="off"
                            id="female"
                            value="Femal"
                          />
                        </label>
                        <label htmlFor="" className="_gender">
                          Other
                          <Field
                            type="radio"
                            name="gender"
                            autoComplete="off"
                            id="other"
                            value="Other"
                          />
                        </label>
                        <Error_Message name="gender" />
                      </div>
                    </div>
                    <button className="btn btn-info" type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>

              {/* <form action="">
                <div className="input_con">
                  <div className="input_flex">
                    <div className="input_block">
                      <label htmlFor="fname" className="input_label">
                        First name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        // value="Fname"
                        autoComplete="off"
                        id="fname"
                        // placeholder="First Name"
                      />
                    </div>

                    <div className="input_block">
                      <label htmlFor="lname" className="input_label">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        // value="Lname"
                        autoComplete="off"
                        id="lname"
                        // placeholder="Last Name"
                      />
                    </div>

                  </div>

                  <div className="input_block">
                    <label htmlFor="email" className="input_label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      // value="Lname"
                      autoComplete="off"
                      id="email"
                      // placeholder="Last Name"
                    />
                  </div>
                  <div className="input_block">
                    <label htmlFor="number" className="input_label">
                      Contact number
                    </label>
                    <input
                      type="number"
                      name="number"
                      // value="Lname"
                      autoComplete="off"
                      id="number"
                      // placeholder="Last Name"
                    />
                  </div>
                  <div className="input_flex">

                  <div className="input_block">
                    <label htmlFor="dob" className="input_label">
                      DOB
                    </label>
                    <input
                      type="date"
                      name="dob"
                      autoComplete="off"
                      id="dob"
                    />
                  </div>
                  <div className="input_block">
                    <label htmlFor="age" className="input_label">
                        Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      autoComplete="off"
                      id="age"
                      />
                  </div>
                      </div>
                  <div className="input_block gender_block">
                    <label htmlFor="gender" className="gender_label">
                      Gender
                    </label>
                    <label htmlFor="gender" className="_gender">Male<input
                      type="radio"
                      name="gender"
                      autoComplete="off"
                      id="male"
                      value="Male"
                    /></label>
                    <label htmlFor="" className="_gender">Female<input
                      type="radio"
                      name="gender"
                      autoComplete="off"
                      id="female"
                      value="Femal"
                    /></label>
                    <label htmlFor="" className="_gender">Other<input
                      type="radio"
                      name="gender"
                      autoComplete="off"
                      id="other"
                      value="Other"
                    /></label>
                    
                  </div>
                </div>
              </form> */}
            </div>
          </div>
          <div className="profile_right">right details</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
