import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, LucideLoader2 } from "lucide-react";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
export const WorkspaceSwitcher = () => {
  const navigate = useNavigate();

  const { workspaceId } = useParams();

  const { isFetching, workspace } = useGetWorkspaceById(workspaceId);

  const { isFetching: isFetchingWorkspace, workspaces } = useFetchWorkspace();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 text-xl ">
          {isFetching ? (
            <LucideLoader2 className=" size-5 animate-spin   " />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer flex-col justify-start items-start">
          {workspace?.name}
          <span className="text-xs text-muted-foreground">
            (Active workspace)
          </span>
        </DropdownMenuItem>

        {isFetchingWorkspace ? (
          <Loader className="animate-spin size-5    " />
        ) : (
          workspaces?.map((workspace) =>{
            if(workspace._id === workspaceId){
              return null
          }
          return (
            <DropdownMenuItem  
            className="cursor-pointer flex-col justify-start items-start"
            onClick={() => navigate(`/workspaces/${workspace._id}`)}
            key={workspace._id}>
              <p className="truncate">{workspace?.name}</p>
            </DropdownMenuItem>
          )}
        )
    )
}
      </DropdownMenuContent>

     
    </DropdownMenu>
  );
};
