import { Navigate, Routes, Route } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen";
import HomeScreen from "./pages/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./store/features/auth/authSlice";
import { AppDispatch, RootState } from "./store/store";
import SignUpScreen from "./pages/SignUpScree";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-[450px] min-h-screen bg-white p-4">
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<LogInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
