import React from "react";

import { Route, Routes } from "react-router-dom";

import { Auth } from "@/pages/Auth/Auth";
import { SignupCard } from "@/components/organism/Auth/SignupCard";
import { SigninCard } from "@/components/organism/Auth/SigninCard";
import { NotFoundPage } from "@/pages/NotFound";
function App() {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupCard />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninCard />
          </Auth>
        }
      />

    {/* this is for not found page */}
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}
export default App;

//
