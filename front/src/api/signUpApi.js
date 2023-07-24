import axios from  "axios";

const signUpApi = async (userInfo) => {
    // const SERVER_URL = "http://3.39.22.182:3000/auth/register/";
    const SERVER_URL = "http://172.30.1.34:3000/auth/register"; //준혁 로컬 서버
    // const SERVER_URL = "http://localhost:5000/userInfo";    //jons-server
    try {
        const response = await axios.post(SERVER_URL, userInfo);
        return response.data;
    } catch(error) {
        console.log(error);
        return false;
    }
};

export default signUpApi;