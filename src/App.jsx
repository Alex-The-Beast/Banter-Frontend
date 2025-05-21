import React from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/sonner";

import { AppContextProvider } from "@/context/AppContextProvider";
import { AppRoutes } from "@/Routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
export default App;

//here we will be using queryclientprovider....
// we will warp our app with queryclientprovider ,
//QueryClientProvider is a React context provider used to wrap your app when using React Query. It allows components inside your app to use hooks like useQuery, useMutation, and more by sharing a single instance of the query client across your entire app.
