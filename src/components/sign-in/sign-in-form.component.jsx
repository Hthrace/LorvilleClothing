import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState } from "react";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { email, password } = formData;

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
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
      dispatch(emailSignInStart(email, password));
      resetForm();
    } catch (err) {
      alert(`${err.code}`);
      console.log(`Error: ${err}`);
    }
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
