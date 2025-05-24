import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { TrashIcon } from "lucide-react";

import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace";
import { toast } from "sonner";
import { useState, useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const WorkspacePreferencesModal = () => {
  const queryClient = useQueryClient();
  const [workspaceId, setWorkspaceId] = useState(null);
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);

  const { initialValue, openPreferences, setOpenPreferences, workspace } =
    useWorkspacePreferencesModal();
  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);
  const [renameValue, setRenameValue] = useState(workspace?.name);

  const { isPending, isSuccess, error, updateWorkspaceMutation } =
    useUpdateWorkspace(workspaceId);
  // const { workspaceId } = useParams();
  // console.log(workspaceId);

  function onClose() {
    setOpenPreferences(false);
  }

  useEffect(() => {
    setWorkspaceId(workspace?._id);
    setRenameValue(workspace?.name);
  }, [workspace]);

  async function handleDelete() {
    try {
      await deleteWorkspaceMutation();
      navigate("/home");
      toast.success("Workspace deleted successfully");
      queryClient.invalidateQueries("fetchWorkspaces");

      setOpenPreferences(false);
    } catch (error) {
      console.log("Error in deleting workspace", error);
      toast.error("Error in deleting workspace");
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      await updateWorkspaceMutation( renameValue );
      toast.success("Workspace updated successfully");
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
      setEditOpen(false);
      setOpenPreferences(false);
    } catch (error) {
      console.log("Error in updating workspace", error);
      toast.error("Error in updating workspace");
    }
  }

  return (
    <Dialog open={openPreferences} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle>{initialValue}</DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-6 flex flex-col gap-y-2">
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger>
              <div className="px-5 py-4 bg-white  rounded-lg border cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm"> Workspace Name</p>
                  <p className="text-sm font-semibold hover:underline">Edit</p>
                </div>

                <p className="text-sm">{initialValue}</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename Workspace</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <Input
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  required
                  autoFocus
                  minLength={3}
                  maxLength={50}
                  disabled={isPending}
                  placeholder="Workspace Name e.g. Design Team"
                />

                <DialogFooter>
                  <DialogClose>
                    <Button variant="outline" disabled={isPending}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={isPending}>
                    Save
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Button
            className="flex items-center  gap-x-2 px-5 py-4 bg-purple-500 hover:bg-purple-700 rounded-lg border cursor-pointer "
            onClick={handleDelete}
          >
            <TrashIcon className="size-5" />
            <p className="text-sm font-semibold ">Delete Worksapce</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
