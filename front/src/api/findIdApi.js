import axios from "axios";

const findIdApi = async (url, data) => {
    const SERVER_URL = `http://3.39.22.182:3000/auth/${url}`;

    try {
        const response = await axios.post(SERVER_URL, data)
        return response;
    } catch(error) {   
        return error;
    }
}; 

export default findIdApi;