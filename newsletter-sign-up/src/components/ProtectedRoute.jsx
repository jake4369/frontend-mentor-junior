import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "./../context/emailContext";

const ProtectedRoute = ({ children }) => {
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  if (!email) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
