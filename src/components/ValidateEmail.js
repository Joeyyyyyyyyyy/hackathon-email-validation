import React from "react";

const ValidateEmail = () => {
    const validRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    /*
        \w same as [a-zA-Z0-9_]
        ^ indicates the beginning of the regex
        $ indicates the end of the regex
    */

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const textInput = document.getElementById("email");
        const email = textInput.value;

        if (email.match(validRegEx)) alert("It's a valid email");
        else alert("It's an invalid email");
    };

    return (
        <div>
            <form action="" method="POST" onSubmit={onSubmitHandler}>
                <div class="form-group">
                    <label for="email">Insert email address here</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="example@email.com"
                    />
                </div>
                <button
                    type="submit"
                    style={{ backgroundColor: "#EF8275" }}
                    className="btn"
                >
                    Check Email
                </button>
            </form>
        </div>
    );
};

export default ValidateEmail;
