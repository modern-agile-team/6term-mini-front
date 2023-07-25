import axios from  "axios";

const checkUserEmail = async (text) => {
    // const SERVER_URL = "http://3.39.22.182:3000/auth/usersEmail/";
    const SERVER_URL = "http://172.30.1.94:3000/auth/usersEmail"; //준혁 로컬 서버
    try {
        const response = await axios.post(SERVER_URL, text);
        console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
    }
};

export default checkUserEmail;