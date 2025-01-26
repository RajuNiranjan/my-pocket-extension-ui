import { useDispatch, useSelector } from "react-redux";
import {
  pocketFullFill,
  pocketPending,
  pocketReject,
} from "../store/features/pocket.slice";
import { AppDispatch, RootState } from "../store/store";
import { axiosInstance } from "../utils/axios";
import { AddPocketType } from "../components/Pocket/AddPocketItemCard";
import { useCallback } from "react";

export const usePocket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem("pocket");

  const getPocketItems = useCallback(async () => {
    if (!token) {
      console.error("Authorization token is missing.");
      return;
    }

    dispatch(pocketPending());
    try {
      const res = await axiosInstance.get("/pocket", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(pocketFullFill(res.data));
    } catch (error) {
      console.error("Error fetching pocket items:", error);
      dispatch(pocketReject(error as string));
    }
  }, [dispatch, token]);

  const addPocketItem = useCallback(
    async ({
      formData,
      setShowCard,
    }: {
      formData: AddPocketType;
      setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
    }) => {
      if (!authUser || !authUser._id) {
        console.error("Auth user or user ID is missing.");
        return;
      }

      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }

      try {
        dispatch(pocketPending());
        const res = await axiosInstance.post(
          `/pocket/${authUser._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        dispatch(pocketFullFill(res.data));

        await getPocketItems();

        setShowCard(false);
      } catch (error) {
        console.error("Error adding pocket item:", error);
        dispatch(pocketReject(error as string));
      }
    },
    [authUser, token, dispatch, getPocketItems]
  );

  const DeletePocketItem = useCallback(
    async (pocketId: string) => {
      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }

      dispatch(pocketPending());
      try {
        const res = await axiosInstance.delete(`/pocket/${pocketId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(pocketFullFill(res.data));

        await getPocketItems();
      } catch (error) {
        console.error("Error deleting pocket item:", error);
        dispatch(pocketReject(error as string));
      }
    },
    [dispatch, token, getPocketItems]
  );

  const UpdatePocketItem = useCallback(
    async ({
      pocketId,
      formData,
    }: {
      pocketId: string;
      formData: AddPocketType;
    }) => {
      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }

      dispatch(pocketPending());
      try {
        const res = await axiosInstance.put(`/pocket/${pocketId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(pocketFullFill(res.data));

        await getPocketItems();
      } catch (error) {
        console.error("Error updating pocket item:", error);
        dispatch(pocketReject(error as string));
      }
    },
    [dispatch, token, getPocketItems]
  );

  return {
    addPocketItem,
    getPocketItems,
    DeletePocketItem,
    UpdatePocketItem,
  };
};
