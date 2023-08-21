import instance from "./privateApi";

const getProfileApi = async(url) => {
    const response = await instance.get(`${url}`);
    return response; 
};
export default getProfileApi;