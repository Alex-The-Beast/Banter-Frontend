 import { createContext, useState } from "react";
 
 const workspacePreferencesModalContext = createContext();

 export const WorkspacePreferencesModalContextProvider = ({children}) => {

    const [openPreferences, setOpenPreferences] = useState(false)
    const [initialValue,setInitialValue] = useState('Edit Workspace...')

    const [workspace,setWorkspace]=useState(null)
  return (
    <workspacePreferencesModalContext.Provider value={{openPreferences,setOpenPreferences,initialValue,setInitialValue,workspace,setWorkspace}}>
      {children}
    </workspacePreferencesModalContext.Provider>
  )
 };

 export default workspacePreferencesModalContext