import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/api/auth";
import { toast } from "sonner";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed in ", data);
      toast.success("Signup successful!", {
        description: "You can now log in with your account.",
      });
    },
    onError: (error) => {
      console.log("Failed to sign up", error);
      toast("Failed to sign up");
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
