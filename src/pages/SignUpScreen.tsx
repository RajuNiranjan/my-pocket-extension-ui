import { NavLink } from "react-router-dom";
import { SVG } from "../utils/svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";
import { LogoAnimation } from "../components/LogoAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
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
    signup(formData);
  };

  return (
    <div className="w-full h-max space-y-6">
      <LogoAnimation />
      <h1 className="text-center text-xl font-semibold dark:text-white">
        Create A New Account
      </h1>

      <form className="space-y-4" onSubmit={handleSubmitForm}>
        <div className="space-y-1">
          <label
            htmlFor="userName"
            className="text-sm font-normal dark:text-gray-200"
          >
            User Name
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img
                src={SVG.User}
                alt="lock_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
            <Input
              type="text"
              id="userName"
              placeholder="John Deo"
              className="py-5 border w-full rounded-lg px-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-normal dark:text-gray-200"
          >
            Email
          </label>

          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img
                src={SVG.Mail}
                alt="lock_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
            <Input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="py-5 border w-full rounded-lg px-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-normal dark:text-gray-200"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img
                src={SVG.Lock}
                alt="lock_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="py-5 border w-full rounded-lg px-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
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
                  className="w-5 h-5 dark:invert"
                />
              ) : (
                <img
                  src={SVG.EyeOpen}
                  alt="eye_open_icon"
                  className="w-5 h-5 dark:invert"
                />
              )}
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 my-4 text-black dark:text-white font-medium py-5 w-full rounded-lg"
        >
          Create Account
        </Button>
      </form>

      <p className="text-sm text-center dark:text-gray-200">
        Already have an account?{" "}
        <NavLink
          to="/login"
          className="text-blue-700 dark:text-blue-400 underline"
        >
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUpScreen;
