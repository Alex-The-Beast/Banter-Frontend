import { fetchWorkspaceDetailsRequest } from "@/api/workspaces";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";


export const useGetWorkspaceById = (id) => {
  const { auth } = useAuth();
  const { data:workspaces, isFetching, isSuccess, error } = useQuery({
    queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
    queryKey: [`fetchWorkspaceById-${id}`],
    staleTime: 10000,
  });

  return {
    isFetching,
    isSuccess,
    error,
    workspaces
  };
};
