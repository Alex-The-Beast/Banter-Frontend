import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { Home } from "@/pages/Home/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { SignupContainer } from "@/components/organism/Auth/SignupContainer";
import { SigninContainer } from "@/components/organism/Auth/SigninContainer";
import { ProtectedRoute } from "@/components/molecules/ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninContainer />
          </Auth>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      {/* this is for not found page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
