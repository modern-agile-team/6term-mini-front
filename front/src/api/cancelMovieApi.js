import axios from "axios";

const cancelMovieApi = async (url, seatId) => {
    const SERVER_URL = `http://3.39.22.182:3000${url}`;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        await axios.delete(SERVER_URL, {
            id: seatId, 
        },{
            headers: {
                "accesstoken": accessToken,
                "refreshtoken": refreshToken
            }
        });
    } catch(err) {
        return Promise.reject(err); 
    }
}

export default cancelMovieApi;