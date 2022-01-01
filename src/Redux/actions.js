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


// request instance to endpoints

const baseUrl = "http://localhost:8000"
const axiosInstance = axios.create({
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
    return () => {
        axios.post(`${baseUrl}/auth/token`)
    }
}