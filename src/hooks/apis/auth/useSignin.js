import { useMutation } from "@tanstack/react-query";
import { signInRequest } from "@/api/auth";
import { toast } from "sonner";
import { useAuth } from "@/hooks/context/useAuth";

export const useSignin = () => {

  const {setAuth} = useAuth();
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

      setAuth({
        user: response.data,
        token: response.data.token,
        loading:false
      })

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
