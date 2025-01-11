import { Routes, Route, Navigate } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchUser } from "./store/features/auth";
import { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  console.log("auth-user", authUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="h-screen  flex justify-center items-center w-full ">
      <div className="w-[450px] h-full p-4">
        <Routes>
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <LogInScreen />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUpScreen />}
          />
          <Route
            path="/"
            element={authUser ? <HomeScreen /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
