import axios from "axios";

export const choiceSeatApi = async (data) => {
    SERVER_URL = "http://3.39.22.182:3000/movies/seats";
    
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.post(SERVER_URL, data,{
            headers: {
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            },
        });
        return response;
    } catch(error) {
        return error;
    }
}