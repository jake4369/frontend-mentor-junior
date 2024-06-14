import { useState } from "react";

const listText = [
  { id: 0, text: "Product discovery and building what matters" },
  { id: 1, text: "Measuring to ensure updates are a success" },
  { id: 2, text: "And much more!" },
];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Form = () => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmail("");
      setEmailIsValid(false);
      return;
    }

    setEmail("");
    setEmailIsValid(true);
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

      <form onSubmit={handleSubmit}>
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
