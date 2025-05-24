import { useContext } from "react";
import workspacePreferencesModalContext from "@/context/WorkspacePreferencesModalContext";
export const useWorkspacePreferencesModal = () => {
  return useContext(workspacePreferencesModalContext);
};
