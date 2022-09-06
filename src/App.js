import React from "react";
import ValidateEmail from "./components/ValidateEmail";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/exabytes-removebg-preview.png";


function App() {
  // const showEmail = () => {};

  return (
    <div className="Maincontainer py-5 text-white">
      <div className="mb-5">
        <h1 className="fw-bold text-center">
          <img src={image} width="100px" />
          <span style={{ marginLeft: "-13px" }}>mail Validator</span>
        </h1>
        <p className="text-center ">
          Afraid of receiving malicious emails from suspicious senders?
          <br />
          Fret not! With just a click, the email will either be authentic or a
          fake.
        </p>
      </div>
      <div className="container">
        <div>
          <ValidateEmail />
        </div>
      </div>
    </div>
  );
}

export default App;
