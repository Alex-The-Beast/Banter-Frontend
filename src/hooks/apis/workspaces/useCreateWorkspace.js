import { createWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateWorkspace = () => {
  const { auth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: createWorkspaceMutation,
  } = useMutation({
    mutationFn: (data) =>
      createWorkspaceRequest({ ...data, token: auth?.token }),
    onSuccess: (data) => {
      console.log("Successfully created workspace ", data);
      toast.success("Successfully created workspace", {
        description: "Communicate with your memebrs.",
      });
    },
    onError: (error) => {
      console.error("Failed to create workspace", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    createWorkspaceMutation,
  }
};
