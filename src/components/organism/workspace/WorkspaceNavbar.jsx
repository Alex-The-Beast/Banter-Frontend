import { Button } from "@/components/ui/button";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/UseCurrentWorkspace";
import { InfoIcon, LucideLoader2, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";

export const WorkspaceNavbar = () => {
  const { workspaceId } = useParams();
  const navigate=useNavigate()
  const {logout}=useAuth()

  const { isFetching, workspace ,error,isSuccess} = useGetWorkspaceById(workspaceId);
  console.log("hello", workspace);
  const{setCurrentWorkspace}=useCurrentWorkspace()

   useEffect(() => {

    if(!isSuccess && !isFetching && error) {
      console.log("Error in fetching workspace", error.status);
      if(error.status===403){
       logout()
        navigate("/auth/signin")
      }
    }
    if(workspace) {
    setCurrentWorkspace(workspace);
    }

  }, [workspace,setCurrentWorkspace,isSuccess,error,isFetching]);

  if (isFetching) {
    return <LucideLoader2 className="animate-spin ml-2  " />;
  }


 

  return (
    <nav className="flex items-center justify-center h-10 p-1.5 bg-slack-dark">
      <div className="flex-1">
        {" "}
        <h1 className="text-white font-bold text-[20px] ml-2 md:ml-8">
          Banter
        </h1>
      </div>
      <div>
        <Button
          size="sm"
          className="bg-accent/25  hover:bg-accent/15 w-full justify-start h-7 px-2"
        >
          <SearchIcon className="size-4 text-white mr-2 " />
          <span className="text-white text-xs">
            Search {workspace?.name || "workspace"}
          </span>
        </Button>
      </div>

      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant="transparent" size="sm">
          <InfoIcon className="size-5 text-white  " />
        </Button>
      </div>
    </nav>
  );
};
