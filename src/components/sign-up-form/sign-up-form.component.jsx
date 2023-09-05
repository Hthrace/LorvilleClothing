import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };

  const resetForm = () => setFormData(() => defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    password !== confirmPassword && alert("Passwords do not match!");
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (err) {
      alert(`${err.code}`);
      console.log(`Error: ${err}`);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name "}
          onChange={handleChange}
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label={"Confirm Password "}
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
