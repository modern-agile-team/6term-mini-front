import axios from  "axios";

const getMovieApi = async () => {
    const SERVER_URL = "http://3.39.22.182:3000/movie/get-movie";

    const response = await axios.get(SERVER_URL);
    return response.data.success;
};

export default getMovieApi;