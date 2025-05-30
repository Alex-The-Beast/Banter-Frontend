import { useEffect, useState } from "react";
import { SignupCard } from "./SignupCard";
import { useSignup } from "@/hooks/apis/auth/useSignup";
import { useNavigate } from "react-router-dom";

export const SignupContainer = () => {
  const navigate = useNavigate();
  const { isPending, isSuccess, error, signupMutation } = useSignup();
  const [validationError, setValidationError] = useState();
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  async function onSignupFormSubmit(e) {
    e.preventDefault();
    console.log("signup form submitted ", signupForm);

    if (
      !signupForm.username ||
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword
    ) {
      console.error("All fields are required");
      setValidationError({ message: "All fields are required" });
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      console.error("Passwords do not match");
      setValidationError({ message: "Passwords do not match" });
      return;
    }

    setValidationError(null);

    await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });
  }

  useEffect(() => {
    if(isSuccess)
        setTimeout(()=>{
            navigate('/auth/signin');
        },2000)
   
  }, [isSuccess, navigate]);

  return (
    <SignupCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
