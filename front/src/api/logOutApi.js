import axios from "axios";
import instance from "./privateApi";

const logOutApi = async (url) => {
    // const SERVER_URL = `http://3.39.22.182:3000/auth/${url}`;
    // // const SERVER_URL = `http://172.30.1.28:3000/auth/${url}`;    //준혁 로컬 서버

    // const accessToken = localStorage.getItem("accessToken");
    // const refreshToken = localStorage.getItem("refreshToken");

    // await axios.delete(SERVER_URL, {
    //     headers: {
    //         "accesstoken": accessToken,
    //         "refreshtoken": refreshToken
    //     }
    // });
    await instance.delete(`${url}`);
};

export default logOutApi;