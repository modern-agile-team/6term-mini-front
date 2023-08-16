import axios from  "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, 
    timeout: 5000,
});

//토큰 불러오기
const getAccessToken = () => {
    return localStorage.getItem("accessToken")
};
const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
};

//토큰 만료 여부 판단
const isTokenExpired = async () => {
    const accessToken = getAccessToken();
    try {
        const { success } = await instance.get(`/movies/lists`, {
            headers: {
                accesstoken: accessToken,
            }
        });
        return success;
    } catch(err) {
        return err.response.data.success;
    }
}

//토근 갱신
const reNewToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await instance.post(`auth/token`, {
        headers: {
            refreshtoken: refreshToken,
        }
    });
    localStorage.setItem("accessToken", response.data.accessToken);
}

//요청 전 인터셉터
instance.interceptors.request.use(
    (config) => {
        // console.log(config);
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        config.headers["Content-Type"] = "application/json";
        config.headers['accesstoken'] = accessToken;
        config.headers['refreshtoken'] = refreshToken;

        return config;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

//요청 후 인터셉터
instance.interceptors.response.use(
    (response) => {
        // console.log(response);
        if (response.status === 404) {
            console.log('404 error');
        }
    
        return response;
    },
    async (error) => {
        console.log(error);
        if (error.response?.status === 401) {
            if (isTokenExpired()) await reNewToken();
        
            const accessToken = getAccessToken();
        
            error.config.headers = {
                'Content-Type': 'application/json',
                "accesstoken": accessToken,
            };
        
            // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
            const response = await axios.request(error.config);
        return response;
        }
        return Promise.reject(error);
    }
);

export default instance;