import * as types from "./actionTypes";


const initialState = {
    trendingSpaces: {}
};

export const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case types.CREATE_USER:
            return state
        default:
            return state
    }
}