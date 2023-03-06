import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
       await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Cannot find user, please check your");
      } else if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else {
        console.log(error);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label='Email'
          type='email'
          id='email-sign-in'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password-sign-in'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />
        <div className='buttons-container'>
          <Button>Sign In</Button>
          <Button
            buttonType='google'
            type='button'
            onClick={logGoogleUser}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
