import instance from "./privateApi";

export const getMovieApi = async(url) => {
        const response = await instance.get(`${url}`);
        return response;
};