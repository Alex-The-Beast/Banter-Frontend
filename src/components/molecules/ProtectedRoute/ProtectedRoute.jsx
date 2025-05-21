import { useAuth } from "@/hooks/context/useAuth";
import { Navigate } from "react-router-dom";
import { LucideLoader2 } from "lucide-react";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (auth.isLoading) {
    return (
      <div className="h-screen w-full flex  flex-col items-center justify-center ">
       
        <LucideLoader2 className="animate-spin ml-2  " />
        Loading......
      </div>
    );
  }
  if (!auth.user || !auth.token) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
