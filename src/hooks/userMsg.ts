import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  chatFullFill,
  chatPending,
  chatReject,
  usersFullFill,
  usersPending,
  usersReject,
} from "../store/features/msg.slice";
import { axiosInstance } from "@/utils/axios";
import { useCallback } from "react";

export const useMsg = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("pocket");
  const { selectedUser } = useSelector((state: RootState) => state.msg);

  const GetChatUsers = useCallback(async () => {
    dispatch(usersPending());
    try {
      const res = await axiosInstance.get(`/msg/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(usersFullFill(res.data));
    } catch (error) {
      console.log(error);
      dispatch(usersReject());
    }
  }, [dispatch, token]);

  const GetConversations = useCallback(async () => {
    dispatch(chatPending());
    try {
      const res = await axiosInstance.get(`/msg/${selectedUser?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(chatFullFill(res.data));
      console.log("conversations", res.data);
    } catch (error) {
      dispatch(chatReject());
      console.log(error);
    }
  }, [dispatch, selectedUser, token]);

  return { GetChatUsers, GetConversations };
};
