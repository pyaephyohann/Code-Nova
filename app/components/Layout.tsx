"use client";

import { ReactNode, useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  if (showSplash) return <SplashScreen />;

  return <div className="mt-2 px-4 relative h-screen">{children}</div>;
};

export default Layout;
