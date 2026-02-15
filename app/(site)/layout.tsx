// (site)/layout.tsx
import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import AnnouncementBar from "../_components/AnouncementBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
