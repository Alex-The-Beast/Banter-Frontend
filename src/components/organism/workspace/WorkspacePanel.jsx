import { useParams } from "react-router-dom";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import {
  AlertTriangleIcon,
  HashIcon,
  Loader,
  MessageSquare,
  MessageSquareTextIcon,
  SendHorizonalIcon,
} from "lucide-react";
import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { SidebarItem } from "@/components/atom/SidebarItem/SidebarItem";
import { WorkspacePanelSection } from "@/components/molecules/Workspace/WorkspacePanelSection";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { UserItem } from "@/components/atom/UserItem/UserItem";

export const WorkspacePanel = () => {
  const { workspaceId } = useParams();

  const {setOpenCreateChannelModal}=useCreateChannelModal();

  const { isFetching, workspace, isSuccess } = useGetWorkspaceById(workspaceId);
  console.log("coming from panel", workspace);

  if (isFetching) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <Loader className="animate-spin size-6 text-white  " />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <AlertTriangleIcon className=" size-6 text-white  " />
        Something went wrong
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slack-medium">
      <WorkspacePanelHeader workspace={workspace} />

      <div className="flex flex-col px-2 mt-3">
        <SidebarItem
          label="Threads"
          icon={MessageSquareTextIcon}
          id="threads"
          variant="active"
        />

        <SidebarItem
          label="Drafts & Sends"
          icon={SendHorizonalIcon}
          id="drafts"
          variant="default"
        />
      </div>
      <WorkspacePanelSection 
      label={"Channels"}
      onIconClick={() => {setOpenCreateChannelModal(true)}}>
        {workspace?.channels?.map((channel) => {
          return (

          <SidebarItem
            key={channel._id}
            label={channel.name}
            icon={HashIcon}
            id={channel._id}
          />
        )
        })}
      </WorkspacePanelSection>
      <WorkspacePanelSection label={"Direct Messages"}
      onIconClick={() => {}}>
        {workspace?.members?.map((member) => {
          return (
            <UserItem
              key={member.memberId._id}
              label={member.memberId.username}
              icon={MessageSquare}
              id={member.memberId._id}
              image={member.memberId.avatar}
            />
          );
        })}
        </WorkspacePanelSection>
    </div>
  );
};
