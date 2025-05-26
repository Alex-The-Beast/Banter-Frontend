import { useMutation } from "@tanstack/react-query"
import { useAuth } from "@/hooks/context/useAuth"
import { resetJoinCodeRequest } from "@/api/workspaces";
import { useQueryClient } from "@tanstack/react-query";

export const useResetJoinCode=(workspaceId)=>{
    const {auth}=useAuth();
    const queryClient=useQueryClient();
    const {isPending,isSuccess,error,mutateAsync:resetJoinCodeMutation}=useMutation({
        mutationFn:()=>resetJoinCodeRequest({workspaceId,token:auth?.token}),

        onSuccess:()=>{
            console.log('Successfully reset join code');
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
        },    
        onError:(error)=>{
            console.log('Failed to reset join code',error);
        }})
    return {
        isPending,
        isSuccess,
        error,
        resetJoinCodeMutation

    }
}