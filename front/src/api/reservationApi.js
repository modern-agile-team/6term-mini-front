import axios from "axios";

const reservationApi = async (url, parmas) => {
    const SERVER_URL = `http://3.39.22.182:3000${url}`

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.post(SERVER_URL, parmas,{
            headers: { 
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            },
        },
        );
    } catch(err) {
        return Promise.reject();
    }
}

export default reservationApi;