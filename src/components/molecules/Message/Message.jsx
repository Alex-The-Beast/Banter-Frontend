import { MessageRenderer } from "@/components/atom/MessageRenderer/MessageRenderer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Message =({authorName,authorImage,createdAt,body})=>{
    return (
        <div className="flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100/60 group relative">
            <div className="flex items-center gap-2">
                <Button>
                    <Avatar>
                        <AvatarImage  className="rounded-md" src={authorImage}/>
                        <AvatarFallback className="rounded-md bg-sky-500 text-sm " >
                            {authorName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>

                <div className="flex flex-col w-full overflow-hidden">
                    <div className="text-xs">
                        <Button className="font-bold text-primary hover:underline">
                            {authorName}
                        </Button>
                        <span>&nbsp;&nbsp;</span>
                        <Button className="text-xs text-muted-foreground hover:underline">
                            {createdAt}
                        </Button>

                    </div>

                    <MessageRenderer value={body} />
                    

                </div>
            </div>

        </div>
    )
}

// till 1:51:36 adding avatar component not any previous bugs.