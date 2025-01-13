import { NavLink } from "react-router-dom";
import { LogoAnimation } from "../components/LogoAnimation";
import { Button } from "@/components/ui/button";

const WelcomeScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center  ">
      <div className="space-y-4">
        <LogoAnimation />
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="font-semibold text-xl">
              Welcome to{" "}
              <span className="bg-yellow-300 text-black font-bold px-2">
                My Pocket!
              </span>{" "}
            </h1>
            <h6 className="text-xs text-gray-400">
              Your personal space to collect and organize everything that
              matters.
            </h6>
          </div>
        </div>
        <NavLink to="/login">
          <Button className="bg-yellow-300 hover:bg-yellow-400 my-4 text-black font-medium p-2 w-full rounded-lg">
            Get Started
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeScreen;
