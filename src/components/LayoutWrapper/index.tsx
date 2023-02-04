import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

function LayoutWrapper({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;
