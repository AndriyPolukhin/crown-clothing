import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sing-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const SingIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUserData({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sing in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={userData.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={userData.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SingIn;
