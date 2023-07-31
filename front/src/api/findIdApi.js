import axios from "axios";

const findIdApi = async (url, data) => {
    // const SERVER_URL = `http://3.39.22.182:3000/auth/${url}`;
    const SERVER_URL = `http://172.30.1.28:3000/auth/${url}`; //준혁 로컬 서버

    try {
        const response = await axios.post(SERVER_URL, data)
        alert(response.data.msg);
    } catch(error) {
        alert(error.response.data.msg);
    }
}; 

export default findIdApi;