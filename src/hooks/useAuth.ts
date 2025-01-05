import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

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
  const signup = async (formData: signUpType) => {
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      localStorage.setItem("pocket", res.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (formData: loginType) => {
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      localStorage.setItem("pocket", res.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { signup, login };
}
