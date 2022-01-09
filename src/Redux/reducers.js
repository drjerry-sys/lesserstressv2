import * as types from "./actionTypes";

const user = localStorage.getItem("access_token") ? true : false;

const initialState = {
    trendingSpaces: {},
    signup_failed_message: {password: [""], user_name: [""], first_name: [""], last_name: [""], email: [""]},
    signin_failed_message: {password: [""], email: [""]},
    isLoggedIn: user,
};

export const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case types.SIGNUP_FAILED:
            state = {...state, signup_failed_message: {...state.signup_failed_message, ...action.payload}}
            return state;
        case types.SIGNUP_SUCCESS:
            state = {...state, signup_failed_message: {...initialState.signup_failed_message}}
            return state;
        case types.SIGNIN_SUCCESS:
            state = {...state, isLoggedIn: true};
            return state;
        case types.SIGNIN_FAILED:
            state = {...state, signin_failed_message: {...state.signin_failed_message, ...action.payload}};
            return state;
        case types.SIGN_OUT:
            state = {...initialState, isLoggedIn: false }
            return state;
        default:
            return state;
    }
}