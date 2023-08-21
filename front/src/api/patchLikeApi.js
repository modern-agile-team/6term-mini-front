import axios from "axios";
import instance from "./privateApi";

const patchLikeApi = async (url) => {
    const response = await instance.patch(`${url}`);
    return response;
}

export default patchLikeApi;