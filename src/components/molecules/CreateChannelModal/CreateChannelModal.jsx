import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useAddChannelToWorkspace } from "@/hooks/apis/workspaces/useAddChannelToWorkspace";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";


import { useCurrentWorkspace } from "@/hooks/context/UseCurrentWorkspace";

export const CreateChannelModal = () => {
  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelModal();

    const queryClient = useQueryClient();
  const { isPending, addChannelToWorkspaceMutation } =
    useAddChannelToWorkspace();

  const { currentWorkspace } = useCurrentWorkspace();
  const [channelName, setChannelName] = useState("");

  function handleClose() {
    setOpenCreateChannelModal(false);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const data = await addChannelToWorkspaceMutation({
        channelName,
        workspaceId: currentWorkspace?._id,
      });
      console.log("Successfully added channel to workspace ", data);
      toast.success(`Successfully added ${channelName} channel to workspace`) 
      queryClient.invalidateQueries(`fetchWorkspaceDetails-${currentWorkspace?._id}`);
    } catch (error) {
      console.log("Error in creating channel in workspace", error);
      toast.error("Error in creating channel in workspace");
      
    } finally {
      handleClose();
      setChannelName("");
    }
  }

  return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create a Channel</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFormSubmit}>
          <Input
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Channel Name e.g. spotify-listening"
            minLength={3}
            required
            disabled={isPending}
          />

          <div className="flex justify-end mt-4">
            <Button>Create Channel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
