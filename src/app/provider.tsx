"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";

const queryClient = new QueryClient();
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "../redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [authStore, setAuthStore] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth_store = createStore({
        authName: "_auth",
        authType: "cookie",
        cookieDomain: window.location.hostname,
        cookieSecure: window.location.protocol === "https:",
      });
      setAuthStore(auth_store);
    }
  }, []);

  if (!authStore) {
    return null; 
  }

  return (
    <AuthProvider store={authStore}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  );
};

export default Providers;
