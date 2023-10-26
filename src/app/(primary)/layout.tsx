import React, { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
