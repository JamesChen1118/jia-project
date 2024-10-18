// import { Link } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <div className="main" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
