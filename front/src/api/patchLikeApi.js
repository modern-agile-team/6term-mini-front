import axios from "axios";

const patchLikeApi = async (url, user) => {
    const SERVER_URL = `http://3.39.22.182:3000/movie/like/${url}`

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.patch(SERVER_URL, {
            headers: { 
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            },
        },
        {
            params: {
                movie_id: user,
            }
        });
        return response;
    } catch(err) {
        return err;
    }
}