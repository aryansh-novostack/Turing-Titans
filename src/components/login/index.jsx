import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg login-card">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="new">
        <p className="new-user">New User?</p>
        <button className="btn btn-secondary w-100">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
