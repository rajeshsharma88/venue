import React from "react";
import "./resources/styles.css";
import Header from "./Components/header_footer/header";
import Footer from "./Components/header_footer/footer";
import Featured from "./Components/featured";
const App = () => {
  return (
    <div className="App">
      <Header className=" " />
      <>
        <Featured />
      </>
      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
