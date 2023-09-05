import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormFields);

  const { email, password } = formData;

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const resetForm = () => setFormData(() => defaultFormFields);

  const handleChange = (e) => {
    setFormData((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log(user.uid);
      resetForm();
    } catch (err) {
      alert(`${err.code}`);
      console.log(`Error: ${err}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email "}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          value={email}
          required
        />
        <FormInput
          label={"Password "}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
