
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    window.location.href = "https://zerodha-clone-dashboard-i7pa.onrender.com/signup";
  }, []);

  return <p>Redirecting to Signup...</p>;
};

export default Signup;
