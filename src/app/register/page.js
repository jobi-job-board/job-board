"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "src/components/Navbar";
import { authenticate } from "../lib/actions";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("USER");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    });

    const info = await response.json();
    if (info.success) {
      authenticate({ email, password });
      router.push("/");
    } else {
      setError(info.error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="register-wrapper">
        <form className="register-form flex-col-cen" onSubmit={handleSubmit}>
          <h2 className="register-h2">Create Account</h2>
          <div className="left-align-register">
            <label className="register-label" htmlFor="name">
              Name
            </label>
            <input
              className="register-input"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              value={name}
              type="text"
            ></input>
          </div>
          <div className="left-align-register">
            <label className="register-label" htmlFor="email">
              Email
            </label>
            <input
              className="register-input"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="email"
              value={email}
              type="text"
            ></input>
          </div>
          <div className="left-align-register">
            <label className="register-label" htmlFor="password">
              Password
            </label>
            <input
              className="register-input"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="password"
              value={password}
              type="text"
            ></input>
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
          <p>{error}</p>
        </form>
      </div>
    </>
  );
}
