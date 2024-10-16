import { Link } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      {Header}
      {Banner}
      {Footer}
    </>
  );
};

export default Layout;
