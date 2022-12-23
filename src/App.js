import logo from "./logo.svg";
import "./App.css";
import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

function App() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setform({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log("form", form);
  }, [form]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 600 }}>
        {/* header */}
        <h1 style={{ textAlign: "center" }}>Login</h1>
        {/* email */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TextField
            name="email"
            onChange={handleChange}
            value={form?.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: 300 }}
          />
        </div>
        {/* password */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TextField
            name="password"
            onChange={handleChange}
            value={form?.password}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ width: 300 }}
            type="password"
          />
        </div>
        {/* submit */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Button
            variant="contained"
            style={{ width: 300 }}
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
