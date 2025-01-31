import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addMessage } from "@/store/features/msg.slice";
import { Msg } from "@/store/types/msg.type";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const useSocket = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { selectedUser } = useSelector((state: RootState) => state.msg);
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authUser) return;

    // Clean up existing socket connection
    if (socketRef.current) {
      socketRef.current.disconnect();
    }

    socketRef.current = io(SOCKET_URL, {
      query: { userId: authUser._id },
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("newMessage", (message: Msg) => {
      console.log("Received message:", message);
      if (
        (message.senderId === selectedUser?._id && message.receiverId === authUser._id) ||
        (message.senderId === authUser._id && message.receiverId === selectedUser?._id)
      ) {
        dispatch(addMessage(message));
      }
    });

    socket.on("messageSent", (message: Msg) => {
      console.log("Message sent confirmation:", message);
      dispatch(addMessage(message));
    });

    return () => {
      socket.disconnect();
    };
  }, [authUser, selectedUser, dispatch]);

  const sendMessage = async (message: string) => {
    if (!socketRef.current || !selectedUser || !authUser) return;

    const messageData = {
      senderId: authUser._id,
      receiverId: selectedUser._id,
      message,
    };

    socketRef.current.emit("sendMessage", messageData, (response: { data: Msg }) => {
      if (response && response.data) {
        dispatch(addMessage(response.data));
      }
    });
  };

  return { sendMessage };
};
