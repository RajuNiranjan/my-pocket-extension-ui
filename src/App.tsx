import { Routes, Route, Navigate } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { fetchUser } from "./store/features/auth";
import { useEffect } from "react";

const App = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  console.log("auth-user", authUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="h-screen  flex justify-center items-center w-full ">
      <div className="w-[450px] h-full p-4">
        <Routes>
          <Route path="/login" element={<LogInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
