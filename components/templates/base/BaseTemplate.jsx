import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import style from "./BaseTemplate.module.css";

const BaseTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`${style.mainContent}`}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
