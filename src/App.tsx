import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { CenteredLayout, MainLayout } from "./layout";
import { ForgotPass, Login, SignUp, useAuth } from "./pages/auth";
import NotFound from "./pages/not-found";
import TenantList from "./pages/tenants/list";

const App: React.FC = () => {
  const {isAuthenticated} = useAuth();
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route
          element={ 
            isAuthenticated?
            <MainLayout>
            <Outlet />
            </MainLayout> :
            <Navigate to="/login" replace /> 
          }
        >
          <Route index path="/" element={<TenantList/>} />
        </Route>
        <Route
          element={
            !isAuthenticated?
            <CenteredLayout>
              <Outlet />
            </CenteredLayout>:
            <Navigate to="/" replace />
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route path="*" element={<CenteredLayout><NotFound /></CenteredLayout>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
