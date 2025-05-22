import { fetchWorkspaceRequest } from "@/api/workspaces";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
import { toast } from "sonner";

export const useFetchWorkspace = () => {
  const { auth } = useAuth();
  const { data:workspaces, isFetching, isSuccess, error } = useQuery({
    queryFn: () => fetchWorkspaceRequest({ token: auth?.token }),
    queryKey: "fetchWorkspaces",
    staleTime: 30000,
  });

  return {
    isFetching,
    isSuccess,
    error,
    workspaces
  };
};
