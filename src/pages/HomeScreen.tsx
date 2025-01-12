import { useEffect, useState } from "react";
import { AddIconCard } from "../components/AddList/AddIconCard";
import PocketAddLaunchIcon from "../components/Pocket/PocketAddLaunchIcon";
import AddPocketItemCard from "../components/Pocket/AddPocketItemCard";
import { usePocket } from "../hooks/usePocket";

const HomeScreen = () => {
  const [showCard, setShowCard] = useState(false);
  const { getPocketItems } = usePocket();

  useEffect(() => {
    getPocketItems();
  }, []);
  return (
    <div className="overflow-y-auto">
      {!showCard && (
        <div className="flex flex-wrap gap-2">
          <AddIconCard />
        </div>
      )}
      {showCard && <AddPocketItemCard setShowCard={setShowCard} />}
      {!showCard && <PocketAddLaunchIcon setShowCard={setShowCard} />}
    </div>
  );
};

export default HomeScreen;
