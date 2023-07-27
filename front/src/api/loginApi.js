import axios from "axios";

const loginApi = async (userInfo) => {
    const SERVER_URL = "http://3.39.22.182:3000/auth/login";
    // const SERVER_URL = "http://172.30.1.54:3000/auth/login";    //준혁 로컬 서버
    // const SERVER_URL = "http://localhost:5000/userInfo";    //jons-server
    try {
        const response = await axios.post(SERVER_URL, userInfo)
        return response;
    } catch(err) {
        if(err.response.status === 401) alert(err.response.data.error);
        return err.response;
    }
};

export default loginApi;

