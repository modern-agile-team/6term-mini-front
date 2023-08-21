import axios from  "axios";

const signUpApi = async (userInfo) => {
    const SERVER_URL = "http://3.39.22.182:3000/auth/register/";
    // const SERVER_URL = "http://172.30.1.28:3000/auth/register"; //준혁 로컬 서버
    try {
        const response = await axios.post(SERVER_URL, userInfo);
        return response;
    } catch(error) {
        if(error.response.status === 401) alert(`${error.response.data.error}`);
        if(error.response.status === 500) alert(`회원가입 중 서버 오류`);
        return false;
    }
};

export default signUpApi;