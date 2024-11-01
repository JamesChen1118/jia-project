import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
