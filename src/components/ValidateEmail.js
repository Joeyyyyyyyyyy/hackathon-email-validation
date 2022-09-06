import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ValidateEmail = () => {
  const [text, setText] = useState({});

  const validRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  /*
        \w same as [a-zA-Z0-9_]
        ^ indicates the beginning of the regex
        $ indicates the end of the regex
    */

  const onChangeHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  console.log(text);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (text.email.match(validRegEx))
      Swal.fire({
        icon: "success",
        title: "It's a valid email",
        confirmButtonColor: "blue"
      }
    );
    else Swal.fire({
      icon: "error",
      title: "It's an invalid email",
      confirmButtonColor: "blue"
    })
  };

  return (
    <div>
      <form action="" method="POST" onSubmit={onSubmitHandler}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            className="form-control"
            name="email"
            placeholder="example@email.com"
            onChange={onChangeHandler}
          />
          <Button variant="primary" id="button-addon2" type="submit">
            <i className="bi bi-search "></i>
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default ValidateEmail;
