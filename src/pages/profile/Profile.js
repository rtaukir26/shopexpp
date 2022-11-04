import React from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import userPic from "../../images/xz2.jpg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile_conatiner">
        <h4 className="text-center">User Details</h4>
        <div className="progile_div">
          <div className="profile_left">
            <h5>Enter Details</h5>
            <div>
              <form action="">
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
              </form>
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
