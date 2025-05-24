import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
import { WorkspacePreferencesModal } from "@/components/molecules/Workspace/WorkspacePreferencesModal";
import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal";

export const Modals = () => {
  return (
    <>
      <CreateWorkspaceModal />
      <WorkspacePreferencesModal/>
      <CreateChannelModal/>
    </>
  );
};
