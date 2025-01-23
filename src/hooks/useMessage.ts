import { axiosInstance } from "@/utils/axios";

export const useMessage = () => {

    const token = localStorage.getItem("pocket");

    const GetAllUsers = async () => {
        try {
            const res = await axiosInstance.get(`/auth/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log("message res", res);

        } catch (error) {
            console.log(error);

        }
    }


    return { GetAllUsers }
}