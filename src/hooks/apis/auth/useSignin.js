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
    onSuccess: (data) => {
      console.log("Successfully signed in ", data);
      toast.success("Signin successful!", {
        description: "Welcome back!"
      });
    },
    onError: (error) => {
      console.log("Failed to sign in", error);
      toast("Failed to sign in");
        
    }
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
