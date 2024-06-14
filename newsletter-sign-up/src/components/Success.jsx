import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../context/emailContext";

const Success = () => {
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="success-message">
      <img
        src="/assets/images/icon-success.svg"
        alt=""
        className="success-icon"
      />

      <h1>Thanks for subscribing</h1>

      <p>
        A confirmation email has been sent to{" "}
        <span className="email">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button className="btn-dismiss" onClick={handleClick}>
        Dismiss message
      </button>
    </div>
  );
};

export default Success;