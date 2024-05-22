import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import App from "./App";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import Count from "./pages/Counting";

import "./styles/index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route 
          path="/count" 
          element={
            <PrivateRoute>
              <Count />
            </PrivateRoute>
          } 
        />
          <Route path="*" element={<NoMatch />} /> 
          {/* <Route path="/count" element={<Count/>} />          */}
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
