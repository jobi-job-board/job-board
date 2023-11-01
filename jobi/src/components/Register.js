import React from "react";
import Footer from "./Footer";
import NavbarLight from "./NavbarLight";

const Register = () => {
  return (
    <div className="register">
      <header>
        <NavbarLight />
        <div className="header-secondary-wrapper register-header">
          <h1>Register</h1>
          <p>Create an Account & Start posting or hiring talents</p>
        </div>
      </header>
      <main></main>
      <Footer />
    </div>
  );
};

export default Register;
