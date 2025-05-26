import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/context/useAuth";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { useEffect } from "react";
import { WorkspaceInviteModel } from "@/components/organism/Modals/WorkspaceInviteModal";
import { useState } from "react";

export const WorkspacePanelHeader = ({ workspace }) => {
  const worspacemembers = workspace?.members;

  const { auth } = useAuth();

  const [openInviteModal, setOpenInviteModal] = useState(false);

  const { setWorkspace } = useWorkspacePreferencesModal();

  const { setOpenPreferences, setInitialValue } =
    useWorkspacePreferencesModal();

  const isLoggedInUserAdminOfWorkspace = worspacemembers?.find(
    (member) =>
      member.memberId._id === auth?.user?._id && member.role === "admin"
  );
  console.log("hello3", isLoggedInUserAdminOfWorkspace);

  useEffect(() => {
    setWorkspace(workspace);
  }, []);

  return (
    <>
      <WorkspaceInviteModel
        openInviteModal={openInviteModal}
        workspaceId={workspace?._id}
        setOpenInviteModal={setOpenInviteModal}
        workspaceName={workspace?.name}
        joinCode={workspace?.joinCode}
      />
      <div className="flex items-center justify-between px-4 h-[50px] gap-0.5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="transparent"
              className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
            >
              <span className="truncate">{workspace?.name}</span>
              <ChevronDownIcon className="size-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem>
              <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2  bg-[#606161]">
                {workspace?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">{workspace?.name}</p>
                <p className="text-xs text-muted-foreground">
                  Active Workspace
                </p>
              </div>
            </DropdownMenuItem>

            {isLoggedInUserAdminOfWorkspace && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {
                    setInitialValue(workspace?.name), setOpenPreferences(true);
                  }}
                >
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => setOpenInviteModal(true)}
                >
                  Invite people to {workspace?.name}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button variant="transparent" size="iconSm">
                  <ListFilterIcon className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter Workspace</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button variant="transparent" size="iconSm">
                  <SquarePenIcon className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create Workspaces</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};
