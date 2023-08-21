import instance from "./privateApi";

const reservationApi = async (url, parmas) => {


    await instance.post(`${url}`, parmas);
}

export default reservationApi;