import axios from "axios";
import * as types from "./actionTypes";
import history from "./history";


// actions for dispatch

const signupSuccess = () => ({
    type: types.SIGNUP_SUCCESS,
})

const signupFailed = (data) => ({
    type: types.SIGNUP_FAILED,
    payload: data
})

const signinSuccess = () => ({
    type: types.SIGNIN_SUCCESS
});

const signinFailed = (data) => ({
    type: types.SIGNIN_FAILED,
    payload: data
});

const signOutSuccess = () => ({
    type: types.SIGN_OUT
})

// request instance to endpoints

const baseUrl = "http://localhost:8000"
export const axiosInstance = axios.create({
        baseURL: `${baseUrl}`,
        timeout: 5000,
        responseType: "json",
        validateStatus: status=> {
            return status < 500
        },
        headers: {
            Authorization: localStorage.getItem("access_token") ? `JWT ${localStorage.getItem("access_token")}` : null,
            "Content-Type": "application/json",
            accept: "application/json"
        }
    })
    
export const createUser = (my_info) => {
    return async function(dispatch) {
        // you can also use .then().catch()
        const res = await axiosInstance.post("/auth/register/", my_info);
        if (res.status === 400) {
            dispatch(signupFailed(res.data));
        } else {
            dispatch(signupSuccess());
            history.push("/sign_in");
            window.location.reload();
        }
    };
};

export const signIn = (credentials) => {
    return dispatch => {
        axiosInstance.post(`/auth/api/token/`, credentials)
        .then(res=> {
            if (res.status === 401) {
                dispatch(signinFailed(res.data));
            } else if (res.status === 200) {
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("refresh_token", res.data.refresh);
                console.log({status: res.status, access: res.data.access, refresh: res.data.refresh})
                axiosInstance.defaults.headers["Authorization"] = `JWT ${localStorage.getItem("access_token")}`;
                dispatch(signinSuccess);
                setTimeout(()=>{
                    history.push("/");
                    window.location.reload();
                }, 1000)
            }
        })
        .catch(err=> {
            console.log(err);
        });
    };
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        dispatch(signOutSuccess());
    }
}