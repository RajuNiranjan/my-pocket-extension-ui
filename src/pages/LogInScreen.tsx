import { NavLink } from "react-router-dom";
import { SVG } from "../utils/svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";
import { LogoAnimation } from "../components/LogoAnimation";

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
      <h1 className="text-center text-xl font-semibold">Welcome back !!</h1>

      <form className="space-y-4" onSubmit={handleSubmitForm}>
        <div className="space-y-1">
          <label htmlFor="userName" className="text-sm font-normal">
            User Name / Email
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-5 inset-x-2">
              <img src={SVG.User} alt="lock_icon" className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="userNameOrEmail"
              placeholder="John Deo / john@deo.com"
              className="p-4 border w-full rounded-lg px-10"
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-normal">
            Password
          </label>
          <div className="relative">
            <div className="absolute w-max inset-y-5 inset-x-2">
              <img src={SVG.Lock} alt="lock_icon" className="w-5 h-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="p-4 border w-full rounded-lg px-10"
              onChange={handleChangeInput}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute w-max right-5 inset-y-5">
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
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-300 my-4 text-black font-medium p-2 w-full rounded-lg">
          Log In
        </button>
      </form>

      <p className="text-sm text-center">
        Don&apos;t have an account?{" "}
        <NavLink to="/signup" className="text-blue-700 underline">
          SignUp
        </NavLink>
      </p>
    </div>
  );
};

export default LogInScreen;
