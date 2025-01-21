import { useEffect, useState } from "react";
import PocketAddLaunchIcon from "../components/Pocket/PocketAddLaunchIcon";
import AddPocketItemCard from "../components/Pocket/AddPocketItemCard";
import { usePocket } from "../hooks/usePocket";
import { SearchPocketItem } from "@/components/Pocket/SearchPocketItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PocketAccordion } from "@/components/Pocket/Accordion/PocketAccordion";

const HomeScreen = () => {
  const [showCard, setShowCard] = useState(false);
  const { getPocketItems } = usePocket();
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    getPocketItems();
  }, []);
  return (
    <div
      className={`overflow-y-auto space-y-4 p-2 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <SearchPocketItem />
      {showCard ? (
        <>
          <AddPocketItemCard setShowCard={setShowCard} />
        </>
      ) : (
        <>
          <PocketAddLaunchIcon setShowCard={setShowCard} />
          <PocketAccordion />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
