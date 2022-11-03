import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import StarRating from "../starRating/StarRating";
import ReactStars from "react-rating-stars-component";
import "./Assertion.css";

const Assertion = ({
  setIsAssertion,
  isAssertion,
  setPopup,
  setFeedbackRating,
}) => {
  const [rating, setRating] = useState(0);
  const [feedback, setfeedback] = useState("");

  const ratingChanged = (newRating) => {
    setRating(newRating);
    // console.log(newRating);
  };
  const productFeedback = () => {
    setIsAssertion(false);
    setPopup(false);
    setFeedbackRating((preFeedback) => [...preFeedback, { rating, feedback }]);
    //  console.log(newRating);
    // console.log(setFeedbackRating);
  };

  return (
    <div>
      <Modal
        show={isAssertion}
        onHide={() => setIsAssertion(false)}
        animation={true}
        centered
        contentClassName="assertion"
        // backdrop='static'//these two can not allow to close the popup when click outside.
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Give your feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How is it?</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />

          <textarea
            type="text"
            placeholder="comments optional"
            className="textArea_input"
            onChange={(e) => setfeedback(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={productFeedback}>
            Submit
          </Button>
          <Button variant="danger" onClick={() => setIsAssertion(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Assertion;
