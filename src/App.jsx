import React from "react";

import { Route, Routes } from "react-router-dom";

import { Auth } from "@/pages/Auth/Auth";

import { NotFoundPage } from "@/pages/NotFound";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SignupContainer } from "@/components/organism/Auth/SignupContainer";
import { SigninContainer } from "@/components/organism/Auth/SigninContainer";
import { Toaster } from "@/components/ui/sonner";
import { Home } from "@/pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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

      <Toaster />
    </QueryClientProvider>
  );
}
export default App;

//here we will be using queryclientprovider....
// we will warp our app with queryclientprovider ,
//QueryClientProvider is a React context provider used to wrap your app when using React Query. It allows components inside your app to use hooks like useQuery, useMutation, and more by sharing a single instance of the query client across your entire app.
