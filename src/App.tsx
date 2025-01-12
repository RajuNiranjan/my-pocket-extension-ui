import { Routes, Route, Navigate } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchUser } from "./store/features/auth";
import { useEffect } from "react";
import { LogoAnimation } from "./components/LogoAnimation";

const App = () => {
  const { authUser, isAuthLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isAuthLoading) {
    return (
      <div className="h-screen w-[450px] flex justify-center items-center">
        <LogoAnimation />
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="w-[450px] h-screen  p-4">
        {authUser && <Header />}
        <Routes>
          {authUser ? (
            // Authenticated Routes
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/login" element={<LogInScreen />} />
              <Route path="/signup" element={<SignUpScreen />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
