import React from "react";
import comp2 from "../../images/xz2.jpg";
import comp3 from "../../images/xz3.jpg";
import comp4 from "../../images/xz4.jpg";
import comp5 from "../../images/xz5.jpg";
import comp6 from "../../images/xz6.png";
import comp7 from "../../images/xz7.webp";

const Footer = () => {
  return (
    <>
      <div className="footer_container mt-5 mb-1 p-5 ">
          <div className=" d-flex justify-content-center flex-wrap  ">
          <div className="m-2 text-center   ">
            <img src={comp4} alt="img" style={{ width: "150px" }} />
            <div className=" " style={{ width: "100px" }}>
              <p className="text-center">Filler text doesn’t.</p>
            </div>
          </div>

          <div className="m-2 text-center   ">
            <img src={comp5} alt="img" style={{ width: "150px" }} />
            <div className=" " style={{ width: "100px" }}>
              <p className="text-center">
                Filler text doesn’t have to be in a foreign
              </p>
            </div>
          </div>

          <div className="m-2 text-center   ">
            <img src={comp7} alt="img" style={{ width: "150px" }} />
            <div className=" " style={{ width: "100px" }}>
              <p className="text-center">
                Filler text doesn’t have to be in a foreign
              </p>
            </div>
          </div>
        </div>
          <p className="text-white">&copy;All rights are resevred! </p>
        </div>
    </>
  );
};

export default Footer;
