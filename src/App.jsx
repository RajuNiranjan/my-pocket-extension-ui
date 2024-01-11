import React from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./components/containers/main";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.png')] h-max font-serif">
      <>
        <Navbar />
        <Main />
      </>
    </div>
  );
};

export default App;
