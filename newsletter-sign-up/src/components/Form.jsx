import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../context/emailContext";

const listText = [
  { id: 0, text: "Product discovery and building what matters" },
  { id: 1, text: "Measuring to ensure updates are a success" },
  { id: 2, text: "And much more!" },
];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Form = () => {
  const { email, setEmail } = useContext(EmailContext);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    if (!emailRegex.test(email)) {
      setEmail("");
      setEmailIsValid(false);
      return;
    }

    setEmail("");
    setEmailIsValid(true);
    navigate("/success");
  };

  return (
    <section className="section__form">
      <h1>Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        {listText.map((obj) => {
          return (
            <li key={obj.id}>
              {" "}
              <img
                src="/assets/images/icon-list.svg"
                alt=""
                className="list-icon"
              />{" "}
              {obj.text}
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit} method="post" action="/success">
        <div className="labels">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          {!emailIsValid && (
            <label className="error-label">Valid email required</label>
          )}
        </div>

        <input
          type="text"
          name="email"
          placeholder="email@company.com"
          id="email"
          value={email}
          onChange={(e) => handleChange(e)}
          className={!emailIsValid ? "error" : ""}
        />

        <button className="btn-subscribe" disabled={!email}>
          Subscribe to montly newsletter
        </button>
      </form>
    </section>
  );
};

export default Form;
