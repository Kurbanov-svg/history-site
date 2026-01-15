import { FC, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSite;
