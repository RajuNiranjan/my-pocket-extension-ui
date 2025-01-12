import { SVG } from "../../utils/svg";

interface PocketAddLaunchIconType {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const PocketAddLaunchIcon = ({ setShowCard }: PocketAddLaunchIconType) => {
  return (
    <div
      onClick={() => setShowCard(true)}
      className="w-10 h-10 rounded-full bg-yellow-300 hover:bg-yellow-400 flex justify-center items-center transition-all duration-300 cursor-pointer absolute bottom-10 ">
      <img src={SVG.Add} alt="" className="w-5 h-5" />
    </div>
  );
};

export default PocketAddLaunchIcon;
