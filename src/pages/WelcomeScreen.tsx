import { NavLink } from "react-router-dom";
import { LogoAnimation } from "../components/LogoAnimation";
import { Button } from "@/components/ui/button";

const WelcomeScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="space-y-4">
        <LogoAnimation />
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
              Welcome to{" "}
              <span className="bg-yellow-300 dark:bg-yellow-400 text-black font-bold px-2">
                My Pocket!
              </span>{" "}
            </h1>
            <h6 className="text-xs text-gray-400 dark:text-gray-300">
              Your personal space to collect and organize everything that
              matters.
            </h6>
          </div>
        </div>
        <NavLink to="/login">
          <Button className="bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500 my-4 text-black font-medium p-2 w-full rounded-lg">
            Get Started
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeScreen;
