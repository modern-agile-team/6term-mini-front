import axios from "axios";

const checkToken = async () => {
    // const SERVER_URL = `http://3.39.22.182:3000/auth/check`;
    const SERVER_URL = `http://172.30.1.54:3000/auth/check`;

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    
    try {
        const response = await axios.get(SERVER_URL, 
            {
                headers: {
                    "accesstoken": accessToken,
                    "refreshtoken": refreshToken
                }
            });
            return response;
    } catch(error) {
        return Promise.error.data;
    }
}

export default checkToken;