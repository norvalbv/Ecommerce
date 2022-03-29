import { useState } from "react";
import "./newsletter.scss";

export default function Newsletter() {
  const [active, setActive] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const update = () => {
    console.log(inputVal);
    document.getElementById("newsletter").innerHTML = "Thanks for Subscribing!";
    setActive(!active);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="newsletter">
      <div className="text">
        <p id="newsletter">
          Unlock exclusive deals, our latest drops, and more! Sign up for texts.
        </p>
        {!active ? (
          <p style={{ textTransform: "none" }}>
            Emails will be sent to {inputVal}
          </p>
        ) : null}
        <input
          placeholder="Email Address"
          type="text"
          className={active === false ? "active" : null}
          value={inputVal}
          onChange={handleChange}
        />
        <button
          onClick={update}
          id="newsletter-btn"
          className={active === false ? "active" : null}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
