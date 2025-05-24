import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const CreateWorkspaceModal = () => {

  const queryClient = useQueryClient();
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } =
    useCreateWorkspaceModal();
  function handleClose() {
    setOpenCreateWorkspaceModal(false);
  }

  const { isPending, createWorkspaceMutation } = useCreateWorkspace();
  const [workspaceName, setWorkspaceName] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const data = await createWorkspaceMutation({ name: workspaceName });
      console.log("created the workspace", data);
      navigate(`/workspaces/${data._id}`);
      queryClient.invalidateQueries("fetchWorkspaces");

    } catch (error) {
      console.log("Not able to create a workspace", error);
    } finally {
      setOpenCreateWorkspaceModal(false);
      setWorkspaceName("");
    }
  }

  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace.</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFormSubmit}>
          <Input
            required
            disabled={isPending}
            minLength={3}
            placeholder="Put the Workspace Name e.g. My Workspace, Dev Workspace etc ..."
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <div>
            <Button className="flex justify-end mt-5" disabled={isPending}>
              Create workspace
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
