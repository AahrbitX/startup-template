import CookieBanner from "@/components/molecules/cookie-banner";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <CookieBanner />
    </div>
  );
}

export default Layout;
