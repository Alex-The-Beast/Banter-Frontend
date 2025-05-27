import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentWorkspace } from "@/hooks/context/UseCurrentWorkspace";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const userItemVariants = cva(
  "flex items-center justify-start gap-1.5 font-normal h-7 px-4 text-sm mt-2",
  {
    variants: {
      variant: {
        default: "text-[#f9edffcc]",
        active: "text-[#481350] bg-white/90 hover:bg-white/80",
      },
    },
    defaultVariants: "default",
  }
);

export const UserItem = ({
  id,
  label = "Member",
  image,
  variant = "default",
}) => {
  const { workspace } = useCurrentWorkspace();
  return (
    <Button
      className={cn(userItemVariants({ variant }))}
      variant="tranparent"
      size="sm"
      asChild
    >
      <Link to={`/workspaces/${workspace?.id}/members/${id}`}>
        <Avatar>
          <AvatarImage src={image} className="rounded-md" />
          <AvatarFallback className="rounded-md bg-sky-500 text-white">
            {label.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <span className="text-sm">{label}</span>
      </Link>
    </Button>
  );
};
