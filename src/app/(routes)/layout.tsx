import Footer from "@/components/organisms/footer";
import React from "react";
import ContactSection from "../(home)/sections/contact";

function RoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ContactSection />
      <Footer />
    </>
  );
}

export default RoutesLayout;
