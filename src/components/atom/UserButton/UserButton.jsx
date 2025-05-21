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
import { LogOutIcon, Settings } from "lucide-react";

export const UserButton = () => {
  const { auth } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        
          <Avatar className="size-16 hover:opacity-85 hover:bg-amber-400 transition">
            <AvatarImage src={auth?.user?.avatar} />
            <AvatarFallback>
              {auth?.user?.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem><Settings/>settings</DropdownMenuItem>
        <DropdownMenuItem><LogOutIcon></LogOutIcon>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
