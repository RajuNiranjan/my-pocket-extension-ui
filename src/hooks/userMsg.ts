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

export const useMsg = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("pocket");
  const { authUser } = useSelector((state: RootState) => state.auth);

  const GetChatUsers = async () => {
    dispatch(usersPending());
    try {
      const res = await axiosInstance.get(`/msg/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(usersFullFill(res.data));
      console.log("chat-Usrs", res.data);
    } catch (error) {
      console.log(error);
      dispatch(usersReject());
    }
  };

  return { GetChatUsers };
};
