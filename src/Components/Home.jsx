import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    if ("a" === "a") {
      navigate("/dashboard");
    } else {
      alert("Wrong Credentials");
    }
  };
  return (
    <div>
      <h1>Welcome to Masai</h1>
      <div style={{ display: "flex", justifyContent: "end", margin: "30px" }}>
        <Link to="/prerequsite">Sign Up Page</Link>
      </div>
      <form>
        <br />
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <br />
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        {/* add logic that once login button is pressed, if data is correct then redirect to dashboard page */}
      </form>
    </div>
  );
};
