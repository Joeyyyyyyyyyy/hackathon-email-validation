import React from "react";
import ValidateEmail from "./components/ValidateEmail";

function App() {
    // const showEmail = () => {};

    return (
        <div className="py-5 text-white">
            <div className="container w-75 mb-5">
                <h1 className="fw-bold text-center">Email Validator</h1>
                <h4 className="text-center">
                    Afraid of receiving malicious emails from suspicious
                    senders?
                </h4>
                <h4 className="text-center">
                    Fret not! With just a click, the email will either be
                    authentic or a fake.
                </h4>
            </div>
            <div className="container w-50">
                <div>
                    <ValidateEmail />
                </div>
            </div>
        </div>
    );
}

export default App;
