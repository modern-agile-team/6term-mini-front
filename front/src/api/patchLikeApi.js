import axios from "axios";

const patchLikeApi = async (url, user) => {
    const SERVER_URL = `http://3.39.22.182:3000/movies/like/${url}`

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
        const response = await axios.patch(SERVER_URL, {
            movie_id: user
        },{
            headers: { 
                "accesstoken": accessToken,
                "refreshtoken": refreshToken,
            },
        },
        );
        return response;
    } catch(err) {
        return err;
    }
}

export default patchLikeApi;