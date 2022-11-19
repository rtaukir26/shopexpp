import * as Yup from "yup";
//About page validation
export const validateSchema = Yup.object({
  name: Yup.string()
    .min(2, "Atleast 2 charactors")
    .max(25)
    .required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  // password: Yup.string().matches(^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$,"password should be like these").min(6).required("Please enter your password"),
  //   confirm_password: Yup.string()
  //     .oneOf([Yup.ref("password"), null, "Password must match"])
  //     .required("Please enter password"),
  // dob: Yup.date().required("date is required"),
  // age: Yup.number().required("age is required"),
  // gender: Yup.string().required("gender required"),
  // social: Yup.array().of(
  //   Yup.string("String is required")
  //     .min(4, "Too sort")
  //     .max(20, "Too long")
  //     .required()
  // ).min(1,"Atleast one social media is required").required(),
  //<ErrorMessage name ="social.0"/>,,>>>>write as it in the social component
});
//Login page validation
export const LoginvalidateSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
//profile page validation
export const profileValidate = Yup.object({
  fname: Yup.string().required("name is required"),
  lname: Yup.string(),
  email: Yup.string()
    .email("please enater valid email")
    .required("email is required"),
  number: Yup.number()
    .min(1000000000, "number should not be less than 10 digits")
    .max(9999999999, "number should not be greater than 10 digits")
    .required("number is required"),
  dob: Yup.date().required("date is required"),
  age: Yup.number().required("age is required"),
  gender: Yup.string().required("gender required"),
});
//register page validation
export const registerValidate = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Atleast 2 charector"),
  email: Yup.string()
    .email("please enater valid email")
    .required("email is required"),
  password: Yup.string()
    .min(6, "too sort password")
    .required("Please enter your password"),
});
