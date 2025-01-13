import { useEffect, useState } from "react";
import PocketAddLaunchIcon from "../components/Pocket/PocketAddLaunchIcon";
import AddPocketItemCard from "../components/Pocket/AddPocketItemCard";
import { usePocket } from "../hooks/usePocket";
import { PocketItemAccordian } from "@/components/Pocket/PocketItemAccordian";
import { SearchPocketItem } from "@/components/Pocket/SearchPocketItem";

const HomeScreen = () => {
  const [showCard, setShowCard] = useState(false);
  const { getPocketItems } = usePocket();

  useEffect(() => {
    getPocketItems();
  }, []);
  return (
    <div className="overflow-y-auto space-y-4 p-2">
      <SearchPocketItem />
      {showCard ? (
        <>
          <AddPocketItemCard setShowCard={setShowCard} />
        </>
      ) : (
        <>
          <PocketAddLaunchIcon setShowCard={setShowCard} />
          <PocketItemAccordian />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
