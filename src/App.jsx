import React from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./components/containers/main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.png')] h-max font-serif">
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    </div>
  );
};

export default App;
