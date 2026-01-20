import { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSite;
