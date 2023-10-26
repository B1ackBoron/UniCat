import React, { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Providers from "../Providers";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </div>
    </div>
  );
};

export default MainLayout;
