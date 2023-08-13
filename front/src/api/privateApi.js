import axios from  "axios";
const instance = axios.create({
    baseURL: process.env.BASE_URL, 
    // 요청이 timeout보다 오래 걸리면 요청이 중단된다.
    timeout: 1000,
    headers: {
        accesstoken: window.localStorage.getItem('accessToken'),
    }
});

//토큰 불러오기
const getToken = () => {
    return localStorage.getItem("accessToken")
}
//토큰 만료 여부 판단
const isTokenExpired = async () => {
    const accessToken = getToken();
    const response = await instance.get(`/movies/lists`, {
        headers: {
            accesstoken: accessToken,
        }
    })
    return response.data.success;
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

instance.interceptors.request.use(
    (config) => {
        const accessToken = getToken();

        config.headers['Content-Type'] = 'application/json';
        config.headers['accesstoken'] = `Bearer ${accessToken}`;

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        if (response.status === 404) {
        console.log('404 페이지로 넘어가야 함!');
        }
    
        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            if (isTokenExpired()) await reNewToken();
        
            const accessToken = getToken();
        
            error.config.headers = {
                'Content-Type': 'application/json',
                "accesstoken": `Bearer ${accessToken}`,
            };
        
            // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
            const response = await axios.request(error.config);
        return response;
        }
        return Promise.reject(error);
    }
);

export default instance;