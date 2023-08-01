import axios from  "axios";

const BASE_URL = "http://3.39.22.182:3000"

export const getMovieApi = async (url) => {
    const SERVER_URL = `${BASE_URL}${url}`;

    try {
        const response = await axios.get(SERVER_URL);
        return response;
    } catch(err) {
        return err;
    }
};