import { NavLink } from "react-router-dom";
import { SVG } from "../utils/svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";
import { LogoAnimation } from "../components/LogoAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LogInScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    userNameOrEmail: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full h-max space-y-6">
      <LogoAnimation />
      <h1 className="text-center text-xl font-semibold dark:text-white">
        Welcome back !!
      </h1>

      <form className="space-y-4" onSubmit={handleSubmitForm}>
        <div className="space-y-1">
          <label
            htmlFor="userName"
            className="text-sm font-normal dark:text-white"
          >
            User Name / Email
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img src={SVG.User} alt="lock_icon" className="w-5 h-5" />
            </div>
            <Input
              type="text"
              id="userNameOrEmail"
              placeholder="John Deo / john@deo.com"
              className="py-5 border w-full rounded-lg px-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-normal dark:text-white"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img src={SVG.Lock} alt="lock_icon" className="w-5 h-5" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="py-5 border w-full rounded-lg px-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onChange={handleChangeInput}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer w-max right-5 inset-y-3"
            >
              {showPassword ? (
                <img
                  src={SVG.EyeClose}
                  alt="eye_close_icon"
                  className="w-5 h-5"
                />
              ) : (
                <img
                  src={SVG.EyeOpen}
                  alt="eye_open_icon"
                  className="w-5 h-5"
                />
              )}
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="my-4 font-medium py-5 w-full rounded-lg bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white"
        >
          Log In
        </Button>
      </form>

      <p className="text-sm text-center dark:text-white">
        Don&apos;t have an account?{" "}
        <NavLink
          to="/signup"
          className="underline text-blue-700 dark:text-blue-400"
        >
          SignUp
        </NavLink>
      </p>
    </div>
  );
};

export default LogInScreen;
