import axios from "axios";

const getProfileApi = async (url) => {
    const SERVER_URL = `http://3.39.22.182:3000/auth/users/${url}`;
    // const SERVER_URL = `http://172.30.1.28:3000/auth/users/${url}`

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.get(SERVER_URL, {
            headers: {
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            },
        });
        return response;
    } catch(error) {
        console.log(error);
    }
};

export default getProfileApi;