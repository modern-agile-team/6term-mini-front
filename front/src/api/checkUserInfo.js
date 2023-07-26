import axios from  "axios";

const checkUserInfo = async (url, text) => {
    const SERVER_URL = `http://3.39.22.182:3000/auth/users/${url}`;
    // const SERVER_URL = `http://172.30.1.100:3000/auth/users/${url}`; //준혁 로컬 서버
    try {
        const response = await axios.post(SERVER_URL, text);
        return response.data;
    } catch(error) {
        return error.response.data;
    }
};

export default checkUserInfo;