import axios from  "axios";

const BASE_URL = "http://3.39.22.182:3000"

export const getMovieApi = async (url) => {
    const SERVER_URL = `${BASE_URL}${url}`;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.get(SERVER_URL, {
            headers: { 
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            }
        });
        return response;
    } catch(err) {
        return err;
    }
};