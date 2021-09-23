import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addNewsLetter, clearNewsLetter } from "../../store/actions/index";
import { showToast } from "./tools";

const NewsLetter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = function (event) {
    event.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsLetter({ email: value }));
  };

  useEffect(() => {
    console.log(userData);
    if (userData.newsletter) {
      if (userData.newsletter === "added") {
        showToast("SUCCESS", "You are subscribed!");
        textInput.current.value = "";
        dispatch(clearNewsLetter());
      } else {
        showToast("ERROR", "You are already subscribed!");
        textInput.current.value = "";
        dispatch(clearNewsLetter());
      }
    }
  }, [userData]);

  return (
    <div className="newsletter_container">
      <h1>Join our newsletter</h1>
      <div className="form">
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Example: youremail@email.com"
              name="email"
              ref={textInput}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add me to the email list
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetter;
