import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { useDispatch } from "react-redux";
import {
  authFailure,
  authStart,
  authSuccess,
} from "../store/features/auth/authSlice";

interface signUpType {
  email: string;
  userName: string;
  password: string;
}
interface loginType {
  emailOrUserName: string;
  password: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async (formData: signUpType) => {
    dispatch(authStart());
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      localStorage.setItem("pocket", res.data.token);
      navigate("/");
      dispatch(authSuccess());
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error as string));
    }
  };
  const login = async (formData: loginType) => {
    dispatch(authStart());
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      localStorage.setItem("pocket", res.data.token);
      navigate("/");
      dispatch(authSuccess());
    } catch (error) {
      dispatch(authFailure(error as string));
      console.log(error);
    }
  };

  return { signup, login };
}
