import { axiosInstance } from "../utils/axios";
import {
  authFullFilled,
  authPending,
  authRejected,
  fetchUser,
  logOut,
} from "../store/features/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useCallback } from "react";

interface formDataType {
  userName?: string;
  email?: string;
  emailOrUserName?: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const signup = useCallback(
    async (formData: formDataType) => {
      dispatch(authPending());
      try {
        const res = await axiosInstance.post("/auth/signup", formData);
        localStorage.setItem("pocket", res.data.token);
        dispatch(fetchUser());
        dispatch(authFullFilled());
      } catch (error) {
        dispatch(authRejected(error as string));
      }
    },
    [dispatch]
  );

  const login = useCallback(
    async (formData: formDataType) => {
      dispatch(authPending());
      try {
        const res = await axiosInstance.post("/auth/login", formData);
        localStorage.setItem("pocket", res.data.token);
        dispatch(fetchUser());
        dispatch(authFullFilled());
      } catch (error) {
        dispatch(authRejected(error as string));
      }
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logOut());
    dispatch(fetchUser());
  }, [dispatch]);

  return { signup, login, logout };
};
