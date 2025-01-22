import { SVG } from "../../utils/svg";

interface PocketAddLaunchIconType {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleClick = (
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowCard(true);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PocketAddLaunchIcon = ({ setShowCard }: PocketAddLaunchIconType) => {
  return (
    <div
      onClick={() => handleClick(setShowCard)}
      className="w-10 h-10 rounded-full bg-yellow-300 dark:bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-600 flex justify-center items-center transition-all duration-300 cursor-pointer"
    >
      <img src={SVG.Add} alt="" className="w-5 h-5" />
    </div>
  );
};

export default PocketAddLaunchIcon;
