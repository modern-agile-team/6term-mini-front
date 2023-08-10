import axios from "axios";

const cancelMovieApi = async (url, seatId) => {
    const SERVER_URL = `http://3.39.22.182:3000${url}`;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.delete(SERVER_URL,{
            headers: {
                "accesstoken": accessToken,
                "refreshtoken": refreshToken
            }, data : { id: seatId }
        });
        return response;
    } catch(err) {
        // return Promise.reject(err);
        return err;
    }
}

export default cancelMovieApi;