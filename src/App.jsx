import React from "react";
import img from "./assets/background.png";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/containers/main";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.png')] h-max">
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    </div>
  );
};

export default App;
