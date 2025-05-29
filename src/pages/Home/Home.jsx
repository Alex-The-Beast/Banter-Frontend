import { UserButton } from "@/components/atom/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
export const Home = () => {
  const { isFetching, workspaces } = useFetchWorkspace();
  const {setOpenCreateWorkspaceModal}=useCreateWorkspaceModal()
  const navigate = useNavigate();

  useEffect(() => {
    if (isFetching) return;
    console.log("workspaces downloaded is", workspaces);

    if(workspaces?.length === 0 || !workspaces) {
        console.log('No workspaces found . Creating one.');
        setOpenCreateWorkspaceModal(true)
    }
    else {
        navigate(`/workspaces/${workspaces[0]._id}`);

    }
  }, [isFetching, workspaces, navigate]);
  return (
    <div className="bg-slack h-screen w-full flex items-center justify-center">
       {/* <CreateWorkspaceModal></CreateWorkspaceModal> */}
      <UserButton></UserButton>
    </div>
  );
};
