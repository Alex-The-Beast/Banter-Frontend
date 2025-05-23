import { WorkspaceNavbar } from "@/components/organism/workspace/WorkspaceNavbar"
import { WorkspaceSidebar } from "@/components/organism/workspace/WorkspaceSidebar"


export const WorkspaceLayout=({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar/>
            <div className="flex h-[calc(100vh-40px)]">
                
                <WorkspaceSidebar/>
             {children}
             </div>

        </div>
       
    )
}