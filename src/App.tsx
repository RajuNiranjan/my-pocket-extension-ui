import { Navigate, Routes, Route } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen";
import SignUpScreen from "./pages/SignUpScree";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  return (
    <div className="w-[450px] min-h-screen bg-white p-4 ">
      <Routes>
        <Route path="/login" element={<LogInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
