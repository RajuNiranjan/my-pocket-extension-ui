import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { pocketFullFill, pocketPending, pocketReject } from "@/store/features/pocket.slice";
import { axiosInstance } from "@/utils/axios";
import { debounce } from "lodash";

export const SearchPocketItem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isPocketLoading } = useSelector((state: RootState) => state.pocket);
  const token = localStorage.getItem("pocket");

  const searchPocketItems = async (title: string) => {
    setNoResults(false);
    
    if (!title.trim()) {
      // If search is empty, fetch all items
      try {
        const res = await axiosInstance.get("/pocket", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(pocketFullFill(res.data));
      } catch (error) {
        console.error("Error fetching all items:", error);
        dispatch(pocketReject(error as string));
      }
      return;
    }

    dispatch(pocketPending());
    try {
      const res = await axiosInstance.get(`/pocket/search?title=${encodeURIComponent(title)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(pocketFullFill(res.data));
      setNoResults(res.data.length === 0);
    } catch (error: any) {
      console.error("Error searching items:", error);
      if (error.response?.status === 404) {
        setNoResults(true);
        dispatch(pocketFullFill([])); // Clear the items list
      } else {
        dispatch(pocketReject(error.message || "Error searching items"));
      }
    }
  };

  // Debounce the search function to avoid too many API calls
  const debouncedSearch = debounce(searchPocketItems, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    
    // Cleanup
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg"
      />
      {noResults && !isPocketLoading && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-2">
          No items found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};
