import { LogoAnimation } from "../components/LogoAnimation";
import { WelcomeCard } from "../components/WelcomeCard";

const WelcomeScreen = () => {
  return (
    <div className="h-screen w-full  ">
      <div className="space-y-4">
        <LogoAnimation />
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="font-semibold text-xl">Welcome to My Pocket!</h1>
            <h6 className="text-xs text-gray-400">
              Your personal space to collect and organize everything that
              matters.
            </h6>
          </div>
        </div>
      </div>
      <WelcomeCard />
    </div>
  );
};

export default WelcomeScreen;
