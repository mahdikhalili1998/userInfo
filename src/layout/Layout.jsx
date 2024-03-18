import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default layout;
