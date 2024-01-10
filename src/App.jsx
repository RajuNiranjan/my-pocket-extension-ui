import React from "react";
import img from "./assets/background.png";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.png')] h-screen">
      <>
        <Navbar />
        <Footer />
      </>
    </div>
  );
};

export default App;
