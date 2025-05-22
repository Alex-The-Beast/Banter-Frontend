import { WorkspaceSidebar } from "@/components/organism/workspace/WorkspaceSidebar"


export const WorkspaceLayout=({ children }) => {
    return (
        <div className="h-[100vh]">
            <div className="flex h-full">
                <WorkspaceSidebar/>
             {children}
             </div>

        </div>
       
    )
}