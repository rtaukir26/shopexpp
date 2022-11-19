import React from "react";
import { ErrorMessage } from "formik";

const Error_Message = ({ name }) => {
  return (
    <div style={{color:"red"}}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default Error_Message;
