import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import router from "./Router/Router.tsx";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router}/>
    </Provider>
    <Toaster position="top-center"/>
  </StrictMode>
);
