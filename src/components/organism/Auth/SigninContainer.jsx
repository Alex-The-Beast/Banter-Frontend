import { useState } from "react";
import { SigninCard } from "./SigninCard";

export const SigninContainer = () => {
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  return <SigninCard signinForm={signinForm} setSigninForm={setSigninForm} />;
};
