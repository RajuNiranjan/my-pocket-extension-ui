import { useDispatch, useSelector } from "react-redux";
import {
  pocketFullFill,
  pocketPending,
  pocketReject,
} from "../store/features/pocket.slice";
import { AppDispatch, RootState } from "../store/store";
import { axiosInstance } from "../utils/axios";
import { AddPocketType } from "../components/Pocket/AddPocketItemCard";

export const usePocket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem("pocket");

  const getPocketItems = async () => {
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
      console.log(error);
      dispatch(pocketReject(error as string));
    }
  };

  const addPocketItem = async ({
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
      getPocketItems();
      setShowCard(false);
    } catch (error) {
      dispatch(pocketReject(error as string));
      console.error("Error adding pocket item:", error);
    }
  };

  const DeletePocketItem = async (pocketId: string) => {
    dispatch(pocketPending());

    try {
      const res = await axiosInstance.delete(`/pocket/${pocketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(pocketFullFill(res.data));
      getPocketItems();
    } catch (error) {
      dispatch(pocketReject(error as string));
      console.error("Error adding pocket item:", error);
    }
  };

  const UpdatePocketItem = async ({
    pocketId,
    formData,
  }: {
    pocketId: string;
    formData: AddPocketType;
  }) => {
    dispatch(pocketPending());

    try {
      const res = await axiosInstance.patch(`/pocket/${pocketId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(pocketFullFill(res.data));
      getPocketItems();
    } catch (error) {
      dispatch(pocketReject(error as string));
      console.error("Error adding pocket item:", error);
    }
  };

  return { addPocketItem, getPocketItems, DeletePocketItem, UpdatePocketItem };
};
