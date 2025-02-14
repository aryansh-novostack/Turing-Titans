import React, { useState } from "react";
import { Container, Typography, Button, TextField, Box } from "@mui/material";
import styles from "./index.module.scss";

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Check passwords match when either password field changes
    if (name === "password" || name === "confirmPassword") {
      if (name === "password") {
        setPasswordError(
          value !== formData.confirmPassword && formData.confirmPassword !== ""
        );
      } else {
        setPasswordError(value !== formData.password);
      }
    }
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const randomId = String(Math.floor(Math.random() * 9000 + 1000));

      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match");
        setLoading(false);
        return;
      }

      const response = await fetch('https://cc1fbde45ead-in-south-01.backstract.io/sleepy-savita-1e835c8eeaa611efab560242ac12000585/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: randomId,
          email: formData.email,
          password_hash: formData.password,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      });

      console.log(response, "response status");

      if (response.status === 200) {
        console.log("Signup Successful");
        setErrorMessage("Signup Successful");
        // Add a small delay before redirect
        setTimeout(() => {
          window.location.href = "https://www.google.com";
        }, 1000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to create account");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={styles.container}>
      <div className={styles["login-card"]}>
        <h2>Signup</h2>
        <form className={styles["signup-form"]}>
          <div className="mb-3">
            <label className={styles["form-label"]}>Email</label>
            <input
              type="email"
              className={styles["form-control"]}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter e-mail"
              style={{ color: "#000" }}
              required
            />
          </div>
          <div className="mb-3">
            <label className={styles["form-label"]}>Password</label>
            <input
              type="password"
              className={styles["form-control"]}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              style={{ color: "#000" }}
              required
            />
          </div>
          <div className="mb-3">
            <label className={styles["form-label"]}>Confirm Password</label>
            <input
              type="password"
              className={styles["form-control"]}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ color: "#000" }}
              placeholder="Enter password"
              required
            />
            {passwordError && (
              <div className={styles["text-danger"]}>
                ! Passwords are not matching
              </div>
            )}
          </div>
          <div className={styles.new}>
            <button 
              type="button"
              className={styles["btn-primary"]}
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </form>
        {errorMessage && (
            <div className={styles["Error"]}>
              {errorMessage}!
            </div>
          )}
      </div>
    </Container>
  );
};
