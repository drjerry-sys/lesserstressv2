import * as types from "./actionTypes";
import initFormData from '../components/pages/ListProperty/ListProperty';

const user = localStorage.getItem("access_token") ? true : false;

const initialState = {
    trendingSpaces: {},
    signup_failed_message: {password: [""], user_name: [""], first_name: [""], last_name: [""], email: [""]},
    signin_failed_message: { detail: ''},
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
};

const initSpace = {
    initFormData: {...initFormData},
    errMessage: {
        comp_name: [''], comp_type: [''], noOfRoomsPerBath: [''],
        noOfRoomsPerToilet: [''], extraRules: [''], agentComment: [''],
        homeData: [],
    },
    formFailed: false,
    search_results: {
        arrival: false,
        search_results: []
    },
};

export const spaceReducers = (state=initSpace, action) => {
    switch (action.type) {
        case types.COMPOUND_SUCCESS:
            return state;
        case types.COMPOUND_FAILED:
            state = {...state, errMessage: {...state.errMessage, ...action.payload }}
            return state;
        case types.ROOM_SUCCESS:
            return state;
        case types.ROOM_FAILED:
            state = {...state, errMessage: {...state.errMessage, ...action.payload }, formFailed: true}
            return state;
        case types.HOME_ROOMS:
            state = { ...state, homeData: action.payload}
            return state;
        case types.SEARCH_RESULTS:
            state = {...state, search_results: {...action.payload, arrival: true}}
            return state;
        default:
            return state
    }
}