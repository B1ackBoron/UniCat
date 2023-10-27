import React, { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Providers from "../Providers";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen m-0">
      <Providers>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </Providers>
    </div>
  );
};

export default MainLayout;
