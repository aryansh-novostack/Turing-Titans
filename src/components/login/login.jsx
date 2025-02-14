import React, { useState } from "react";
import axios from "axios";
import "./login.css"; // Assuming you already have styles for the login form

const LoginW = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      
      setLoading(true);
      setErrorMessage("");
    
      const userData = {
        email,
        password,
      };
    
      try {
        const response = await axios.post(
          "https://cc1fbde45ead-in-south-01.backstract.io/sleepy-savita-1e835c8eeaa611efab560242ac12000585/api/login/",
          userData,  // Directly pass userData here, no extra object wrapping
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        if (response.status === 200) {
          console.log("Login Successful:", response.data);
          // Handle successful login here
        }
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow-lg login-card">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="new">
            <p className="new-user">New User?</p>
            <button className="btn btn-secondary w-100">Sign Up</button>
          </div>
        </div>
      </div>
    );
  };
  

export default LoginW;
