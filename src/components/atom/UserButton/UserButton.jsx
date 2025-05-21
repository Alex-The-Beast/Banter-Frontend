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
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem> Profile</DropdownMenuItem>
        
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
