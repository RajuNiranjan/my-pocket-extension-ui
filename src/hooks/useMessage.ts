import { axiosInstance } from "@/utils/axios";
import { usersPending, usersReject, usersFullFill } from '@/store/features/message.slice'
import { useDispatch } from "react-redux";
export const useMessage = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("pocket");

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


    return { GetAllUsers }
}