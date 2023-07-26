import axios from  "axios";

const getMovieApi = async () => {
    const SERVER_URL = "http://3.39.22.182:3000/get-movie";

    try {
        const response = await axios.get(SERVER_URL);
        return response.data;
    } catch(err) {
        console.log(err.response);
    }
};

export default getMovieApi;