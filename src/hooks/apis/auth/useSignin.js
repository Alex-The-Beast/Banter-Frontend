import { useMutation } from "@tanstack/react-query";
import { signInRequest } from "@/api/auth";
import { toast } from "sonner";

export const useSignin = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log("Successfully signed in ", response);

      const userObj = JSON.stringify(response.data);
      localStorage.setItem("user", userObj);
      localStorage.setItem("token", response.data.token);

      toast.success("Signin successful!", {
        description: "Welcome back!",
      });
    },
    onError: (error) => {
      console.log("Failed to sign in", error);
      toast("Failed to sign in");
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
