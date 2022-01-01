import * as types from "./actionTypes";

const initialState = {
    trendingSpaces: {},
    signup_failed_message: {password: [""], user_name: [""], first_name: [""], last_name: [""], email: [""]},
};

export const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case types.SIGNUP_FAILED:
            state = {...state, signup_failed_message: {...state.signup_failed_message, ...action.payload}}
            return state;
        case types.SIGNUP_SUCCESS:
            state = {...state, signup_failed_message: {...initialState.signup_failed_message}}
            return state;
        // case types.
        case types.USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}