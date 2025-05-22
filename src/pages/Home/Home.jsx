import { UserButton } from "@/components/atom/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";
// import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
export const Home = () => {
  const { isFetching, workspaces } = useFetchWorkspace();

  useEffect(() => {
    if (isFetching) return;
    console.log("workspaces downloaded is", workspaces);

    if(workspaces.length === 0 || !workspaces) {
        console.log('No workspaces found . Creating one.');
    }
  }, [isFetching, workspaces]);
  return (
    <div className="bg-slack h-screen w-full flex items-center justify-center">
       {/* <CreateWorkspaceModal></CreateWorkspaceModal> */}
      <UserButton></UserButton>
    </div>
  );
};
