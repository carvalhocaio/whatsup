import React from "react";
import ReactDOM from "react-dom/client";
import { MappedRoutes } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <MappedRoutes />
    </ChakraProvider>
  </React.StrictMode>
);
