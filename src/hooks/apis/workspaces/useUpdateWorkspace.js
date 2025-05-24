import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
import { updateWorkspaceRequest } from "@/api/workspaces";
import { useParams } from "react-router-dom";
import {toast} from "sonner";

export const useUpdateWorkspace = (workspaceId) => {

    const {auth}=useAuth();
    const {workspaceId}=useParams();

    const { isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation   }=useMutation({
        mutationFn: (name) => updateWorkspaceRequest({name, workspaceId,token: auth?.token }),

        onSuccess: (data) => {
            console.log("Successfully updated workspace ", data);
            toast.success("Successfully updated workspace", {
                description: "Do what you want .. Your Workspace is upate.",
            });
        },
        onError: (error) => {
            console.error("Failed to update workspace", error);
        },
    })

    return {
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation

    }
};