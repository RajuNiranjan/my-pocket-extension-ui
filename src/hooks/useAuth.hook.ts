import { axiosInstance } from "../utils/axios";
import {
  authFullFilled,
  authPending,
  authRejected,
} from "../store/features/auth";
import { useDispatch } from "react-redux";

interface formDataType {
  userName?: string;
  email?: string;
  emailOrUserName?: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useDispatch();

  const signup = async (formData: formDataType) => {
    dispatch(authPending());
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      localStorage.setItem("pocket", res.data.token);
      dispatch(authFullFilled());
    } catch (error) {
      console.log(error);
      dispatch(authRejected(error as string));
    }
  };

  const login = async (formData: formDataType) => {
    dispatch(authPending());
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      localStorage.setItem("pocket", res.data.token);
      dispatch(authFullFilled());
    } catch (error) {
      console.log(error);
      dispatch(authRejected(error as string));
    }
  };

  return { signup, login };
};
