import { SVG } from "../utils/svg";

const HomeScreen = () => {
  return (
    <div>
      <img
        src={SVG.Logo}
        alt="Logo"
        className="w-10 h-10 rounded-xl animate-float"
      />
    </div>
  );
};

export default HomeScreen;
