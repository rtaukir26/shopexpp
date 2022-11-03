import * as Yup from "yup";
//About page validate
export const validateSchema = Yup.object({
  name: Yup.string()
    .min(2, "Atleast 2 charactors")
    .max(25)
    .required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  // password: Yup.string().min(6).required("Please enter your password"),
  //   confirm_password: Yup.string()
  //     .oneOf([Yup.ref("password"), null, "Password must match"])
  //     .required("Please enter password"),
});
//Login page validate
export const LoginvalidateSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
 
});
