import { UserButton } from "@/components/atom/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";

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
      <UserButton></UserButton>
    </div>
  );
};
