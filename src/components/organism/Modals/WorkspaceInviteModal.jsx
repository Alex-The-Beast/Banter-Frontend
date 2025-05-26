import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";
import { CopyIcon, RefreshCcwIcon } from "lucide-react";
import { toast } from "sonner";
export const WorkspaceInviteModel = ({
  openInviteModal,
  setOpenInviteModal,
  workspaceName,
  joinCode,
  workspaceId,
}) => {
  const {  resetJoinCodeMutation } =
    useResetJoinCode(workspaceId);
  async function handleCopy() {
    const inviteLink = `${joinCode}`;
    await navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy!");
        console.error(err);
      });
  }

  async function handleResetCode() {
    try {
      await resetJoinCodeMutation();
      toast.success("Join code reset successfully");
    } catch (error) {
      console.log("Error resetting join code", error);
    }
  }
  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite People to {workspaceName}</DialogTitle>
          <DialogDescription>
            Use the join code shown below to invite people to workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-10 gap-y-4">
          <p className="font-bold text-4xl uppercase">{joinCode}</p>

          <Button size="sm" variant="ghost" onClick={handleCopy}>
            {" "}
            Copy Link <CopyIcon className="size-4 ml-2" />
          </Button>

          {/* Link to redirect the user in a new tab to the join tab */}

          <a href={`/workspaces/join/${workspaceId}`}
          target="_blank"  rel="noreferrer" className="text-blue-500 underline">Redirect to join page</a>
        </div>

        <div className="flex  items-center justify-center  w-full">
          <Button variant="outline" onClick={handleResetCode}>
            {" "}
            Reset Join Code <RefreshCcwIcon className="size-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
