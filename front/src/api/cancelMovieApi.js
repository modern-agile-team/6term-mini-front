import axios from "axios";
import instance from "./privateApi";

const cancelMovieApi = async (url, seatId) => {
    const response = await instance.delete(`${url}`, {
        data: { id: seatId}
    });
    return response;
}

export default cancelMovieApi;