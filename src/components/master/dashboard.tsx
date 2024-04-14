import React, { useEffect } from "react";
import Navbar from "../layouts/navbar";
import LeftMenu from "../layouts/leftMenu";
import RightMenu from "../layouts/rightMenu";
import AuthHook from "@/hooks/useAuth";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const authRoutes = ["/login", "/register"];

const Dashboard = ({ children }: Props) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const { getTokenAuth } = AuthHook();
  const token = getTokenAuth();

  useEffect(() => {
    if (route.isReady) {
      if (!token && !authRoutes.includes(currentRoute)) {
        route.replace("/login");
      }
    }
  }, [currentRoute, route.isReady]);

  if (authRoutes.includes(currentRoute)) {
    if (token) {
      route.push("/");
    }
    return <>{children}</>;
  }

  return (
    <div>
      <Navbar />
      <LeftMenu>{children}</LeftMenu>
      <RightMenu />
    </div>
  );
};

export default Dashboard;
