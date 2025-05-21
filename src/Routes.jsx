import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { Home } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { SignupContainer } from "@/components/organism/Auth/SignupContainer";
import { SigninContainer } from "@/components/organism/Auth/SigninContainer";
export const AppRoutes=()=>{
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

          <Route path="/home" element={<Home />} />
          {/* this is for not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}