import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
import { deleteWorkspaceRequest } from "@/api/workspaces";
import { useParams } from "react-router-dom";
import {toast} from "sonner";

export const useDeleteWorkspace = (workspaceId) => {

    const {auth}=useAuth();
    const {workspaceId}=useParams();

    const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutation   }=useMutation({
        mutationFn: () => deleteWorkspaceRequest({ workspaceId,token: auth?.token }),

        onSuccess: (data) => {
            console.log("Successfully deleted workspace ", data);
            toast.success("Successfully deleted workspace", {
                description: "Have Fun .. Your Workspace is deleted",
            });
        },
        onError: (error) => {
            console.error("Failed to delete workspace", error);
        },
    })

    return {
        isPending,
        isSuccess,
        error,
        deleteWorkspaceMutation

    }
};