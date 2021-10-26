import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { signInUsingGoogle, user } = useAuth();
  console.log(user);
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  return (
    <div className="login-container">
      <div className="border border-2 p-5 rounded">
        <h2 className="text-center">Login with</h2>
        <Button className="my-2" onClick={signInUsingGoogle}>
          {googleIcon} Continue with Google
        </Button>
        <p>
          Don't have an any account?{" "}
          <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
