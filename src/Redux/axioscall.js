import axios from 'axios';

const baseUrl = 'http://localhost:8000/';
const axiosInstance = axios.create({
        baseURL: `${baseUrl}`,
        timeout: 10000,
        responseType: "json",
        validateStatus: status=> {
            return status < 500
        },
        headers: {
            Authorization: localStorage.getItem("access_token") ? `JWT ${localStorage.getItem("access_token")}` : null,
            "Content-Type": "application/json",
            accept: "application/json"
        }
});

axiosInstance.interceptors.response.use(
    response => {
        const originalRequest = response.config;
        // console.log({response})
        if (response.status ===  401 && originalRequest.url === baseUrl + '/auth/token/refresh/') {
            
            window.location.href = '/sign_in';
        }
        if (response.data.code === 'token_not_valid' && response.status === 401 && response.statusText === 'Unauthorized') {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken !== 'undefined') {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
                // exp date in token is expressed in seconds, while now() returns milliseconds
                const now = Math.ceil(Date.now() / 1000);
                // console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return axiosInstance.post('/auth/token/refresh/', { refresh: refreshToken })
                    .then(response=>{
                        localStorage.setItem('access_token', response.data.access)
                        localStorage.setItem('refresh_token', response.data.refresh)

                        axiosInstance.defaults.headers['Authorization'] = `JWT ${response.data.access}`;

                        return axiosInstance(originalRequest);
                    })
                    .catch(err=>{
                        // console.log(err)
                    });
                } else {
                    // console.log('Refresh token is expired', tokenParts.exp, now)
                    window.location.href = '/sign_in';
                }
            } else {
                // console.log('Refresh token not available. ')
                window.location.href = '/sign_in';
            }
        }


        return response;
    },
    async function(error) {
        
        // // console.log({originalRequest})
        // console.log('this is axios interceptor')
        if (typeof(error.response) === 'undefined') {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            axiosInstance.defaults.headers['Authorization'] = null;
            alert('server is not running')
            // window.location.href = '/';
            return Promise.reject(error);
        }
        
        // specific error handling done elsewhere
        return Promise.reject(error)
    }
);

export default axiosInstance;
