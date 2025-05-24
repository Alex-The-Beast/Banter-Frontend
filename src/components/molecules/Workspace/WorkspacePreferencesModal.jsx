import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { TrashIcon } from "lucide-react";

export const WorkspacePreferencesModal = () => {
  const { initialValue, openPreferences, setOpenPreferences } =
    useWorkspacePreferencesModal();

    function onClose() {
      setOpenPreferences(false);
    }

  return (
    <Dialog open={openPreferences} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-white">
          <DialogTitle>{initialValue}</DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-6 flex flex-col gap-y-2">
          <div className="px-5 py-4 bg-white  rounded-lg border cursor-pointer hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm"> Workspace Name</p>
              <p className="text-sm font-semibold hover:underline">Edit</p>
            </div>

            <p className="text-sm">{initialValue}</p>


          </div>

          <Button className="flex items-center gap-x-2 px-5 py-4 bg-purple-400  rounded-lg border cursor-pointer hover:bg-purple-600">
            <TrashIcon className="size-5" />
            <p className="text-sm font-semibold">Delete Worksapce</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
