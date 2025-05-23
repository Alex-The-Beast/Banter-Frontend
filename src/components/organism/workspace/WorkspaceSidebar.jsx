import { UserButton } from "@/components/atom/UserButton/UserButton";
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton";
import {
  BellIcon,
  HomeIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
 
} from "lucide-react";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";


export const WorkspaceSidebar = () => {
  return (
    <aside className="w-[70px] h-full bg-slack-dark flex flex-col gap-y-4 items-center pt-[10px] pb-[5px]">

      <WorkspaceSwitcher/>
      <SidebarButton Icons={HomeIcon} label="Home" />
      <SidebarButton Icons={MessageSquareIcon} label="DMs" />

      <SidebarButton Icons={BellIcon} label="Notifications" />
      <SidebarButton Icons={MoreHorizontalIcon} label="More" />

      <div className="flex flex-col items-center justify-center mt-auto mb-[5px] gap-y-1">
        <UserButton/> 
      </div>
 

    </aside>
    
  );
};
