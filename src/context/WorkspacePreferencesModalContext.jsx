 import { createContext, useState } from "react";
 
 const workspacePreferencesModalContext = createContext();

 export const WorkspacePreferencesModalContextProvider = ({children}) => {

    const [openPreferences, setOpenPreferences] = useState(false)
    const [initialValue,setInitialValue] = useState('Edit Workspace...')
  return (
    <workspacePreferencesModalContext.Provider value={{openPreferences,setOpenPreferences,initialValue,setInitialValue}}>
      {children}
    </workspacePreferencesModalContext.Provider>
  )
 };

 export default workspacePreferencesModalContext