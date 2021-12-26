import axios from "axios";
import * as types from "./actionTypes";

// actions for dispatch
const registerUser = (info) => ({
    type: types.CREATE_USER,
    payload: info
});

const getTrendingSpaces = () => ({
    type: types.GET_SPACES
})

// requests to endpoints

const baseUrl = "http://localhost:8000"

const userCreated = () => ({
    type: types.UsER_CREATED
})

const axiosInstance = axios.create({
        baseURL: `${baseUrl}`,
        timeout: 5000,
        headers: {
            Authorization: localStorage.getItem("access_token") ? `JWT ${localStorage.getItem("access_token")}` : null,
            "Content-Type": "application/json",
            accept: "application/json"
        }
    })

export const createUser = (my_info) => {
    return (dispatch) => {
        axiosInstance.post("/auth/register/", my_info)
        .then((res)=> {
            // dispatch(userCreated(res.data))
            console.log('went well')
        })
        .catch((err) => {
            console.log(err)
        })
    };
};

export const signIn = (credentials) => {
    return () => {
        axios.post(`${baseUrl}/auth/token`)
    }
}