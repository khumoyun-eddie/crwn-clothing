import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("password and confirm password are not match");

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          id='name'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          id='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
