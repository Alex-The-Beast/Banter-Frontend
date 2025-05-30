import { useMutation } from "@tanstack/react-query"
import { addMemberToWorkspaceRequest } from "@/api/workspaces"
import { useAuth } from "@/hooks/context/useAuth"


export const useAddMemberToWorkspace =(workspaceId)=>{
    const {auth}=useAuth();

    const {isPending,isSuccess,error,mutateAsync:addMemberToWorkspaceMutation  }=useMutation({
        mutationFn:()=> addMemberToWorkspaceRequest({workspaceId,token:auth?.token}),
    
    onSuccess:()=>{
        console.log("Successfully added member to workspace");
       
    },
    onError:(error)=>{
        console.log('Failed to add member in workspace',error);

    }
    })
    return {
        isPending,
        isSuccess,
        error,
        addMemberToWorkspaceMutation

    }
}