import { axiosInstance } from "@/utils/axios";
import { usersPending, usersReject, usersFullFill, messagesReject, messagesPending, messageFullFill } from '@/store/features/message.slice'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
export const useMessage = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("pocket");
    const { selectedUser } = useSelector((state: RootState) => state.message)

    const GetAllUsers = async () => {
        dispatch(usersPending())
        try {
            const res = await axiosInstance.get(`/auth/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(usersFullFill(res.data))
            console.log("message res", res);

        } catch (error) {
            console.log(error);
            dispatch(usersReject())
        }
    }

    const GetConversation = async () => {
        dispatch(messagesPending())
        try {

            const res = await axiosInstance.get(`/messages/${selectedUser}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch(messageFullFill(res.data))
            console.log("conversations---data", res.data);

        } catch (error) {
            console.log(error);
            dispatch(messagesReject())

        }
    }

    const SendMessage = async (message: string, setMessage: any) => {
        dispatch(messagesPending())
        try {

            const res = await axiosInstance.post(`messages/${selectedUser}`, { message }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(res.data);
            setMessage('')
            GetConversation()


        } catch (error) {
            console.log(error);
            dispatch(messagesReject())

        }
    }


    return { GetAllUsers, GetConversation, SendMessage }
}