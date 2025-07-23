import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
