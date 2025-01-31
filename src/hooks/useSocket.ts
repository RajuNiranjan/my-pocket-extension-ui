import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {  addMessage } from "@/store/features/msg.slice";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL

export const useSocket = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { selectedUser,  } = useSelector((state: RootState) => state.msg);
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authUser) return;

    socketRef.current = io(SOCKET_URL, {
      query: { userId: authUser._id },
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected to socket server:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    socket.on("newMessage", (message) => {
      console.log("New message received:", message);
      dispatch(addMessage(message));
    });

    return () => {
      socket.disconnect();
    };
  }, [authUser, dispatch]);

  const sendMessage = (message: string) => {
    if (!socketRef.current || !selectedUser || !authUser) return;

    const messageData = {
      senderId: authUser._id,
      receiverId: selectedUser._id,
      message,
    };

    socketRef.current.emit("sendMessage", messageData);
    
    // Add the message to the local state immediately
    dispatch(addMessage({
      ...messageData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
  };

  return { sendMessage };
};
