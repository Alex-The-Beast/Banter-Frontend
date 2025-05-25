import { useMutation } from "@tanstack/react-query";
import { addChannelToWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { toast } from "sonner";

export const useAddChannelToWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addChannelToWorkspaceMutation,
  } = useMutation({
    mutationFn: ({ channelName , workspaceId}) =>
      addChannelToWorkspaceRequest({
        workspaceId,
        channelName,
        token: auth?.token,
      }),
    onSuccess: (data) => {
      console.log("Successfully added channel to workspace ", data);
    //   toast.success("Successfully added channel to workspace", {
    //     description: "Communicate with your memebrs.",
    //   })
    },
    onError: (error) => {
      console.error("Failed to add channel to workspace", error);
    
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    addChannelToWorkspaceMutation,
  };
};
