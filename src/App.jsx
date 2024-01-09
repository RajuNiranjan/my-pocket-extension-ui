import React from "react";
import img from "./assets/background.png";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.png')] h-screen">
      <>
        <Navbar />
      </>
    </div>
  );
};

export default App;
