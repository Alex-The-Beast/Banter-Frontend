import { useEffect, useState } from "react";
import { SigninCard } from "./SigninCard";
import { useNavigate } from "react-router-dom";
import { useSignin } from "@/hooks/apis/auth/useSignin";

export const SigninContainer = () => {
    const navigate = useNavigate();
  const { isPending, isSuccess, error, signinMutation } = useSignin();
  const [validationError, setValidationError] = useState();
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  async function onSigninFormSubmit(e) {
    e.preventDefault();
    console.log("Signin Form submitted.", signinForm);

    if (!signinForm.email || !signinForm.password) {
      console.error("All fields are required");
      setValidationError({ message: "All fields are required" });
      return;
    }

    setValidationError(null);

    await signinMutation({
      email: signinForm.email,
      password: signinForm.password,
    });

 
  }

     useEffect(() => {
      if (isSuccess)
        setTimeout(() => {
          navigate("/home");
        }, 2000);
    }, [isSuccess, navigate]);
  return (
    <SigninCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signinForm={signinForm}
      setSigninForm={setSigninForm}
      validationError={validationError}
      onSigninFormSubmit={onSigninFormSubmit}
    />
  );
};
