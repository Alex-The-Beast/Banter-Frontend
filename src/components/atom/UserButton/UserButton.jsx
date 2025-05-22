import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { LogOutIcon, PencilIcon, SettingsIcon } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";


export const UserButton = () => {
    const navigate=useNavigate();
  const { auth,logout } = useAuth();

  async function handleLogout() {
    await logout();

   toast.success("Logout  successful!", {
     description: "You can now log in with your account.",
     type: "success",

   })
   navigate("/auth/signin")
  }

  const {setOpenCreateWorkspaceModal}=useCreateWorkspaceModal()

  function openWorkspaceModal() {
    setOpenCreateWorkspaceModal(true);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-12 hover:opacity-85 hover:bg-amber-400 transition">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>
            {auth?.user?.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{auth?.user?.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={openWorkspaceModal}> <PencilIcon className="size-4 mr-2 h-10"/>Create Workspace</DropdownMenuItem>
        
        <DropdownMenuItem>
          <SettingsIcon className="size-4 mr-2 h-10" />
          settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="size-4 mr-2 h-10" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
