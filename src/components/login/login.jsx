import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const LoginW = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://cc1fbde45ead-in-south-01.backstract.io/sleepy-savita-1e835c8eeaa611efab560242ac12000585/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify({
            email: email,
            password_hash: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg login-card">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          {errorMessage && (
              <div className="new-user" role="alert">
                {errorMessage}
              </div>
            )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-3">
          <div className="new">
            <p className="new-user">New User?</p>
            <button
              className="btn btn-secondary w-100"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginW;
