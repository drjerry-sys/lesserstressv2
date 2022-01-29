import * as types from "./actionTypes";
import history from "./history";
import _ from 'lodash';
import axiosInstance from './axioscall'

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
        axiosInstance.post('/auth/logout/', { refresh_token: localStorage.getItem('refresh_token') })
        .then(res=>{
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            axiosInstance.defaults.headers['Authorization'] = null;
            dispatch(signOutSuccess());
        })
        .catch(err=>{
            console.log(err)
        })
    }
};




// spaces actions

const compoundCreated = () =>({
    type: types.COMPOUND_SUCCESS
});

const compoundFailed = (data) => ({
    type: types.COMPOUND_FAILED,
    payload: data
});

const roomCreated = () => ({
    type: types.ROOM_SUCCESS,
});

const roomFailed = (data) => ({
    type: types.ROOM_FAILED,
    payload: data
});

export const submitSpace = (formData) => {

    let {
        gender, compoundId, roomType, areaLocated, noOfWindows, noOfTenantPermitted, noOfRoomsPerBath,
        noOfRoomsPerToilet, comp_name, comp_type, roomAreaUnit, roomArea, latitude, longitude, room_image,
        comp_image, room_yearlyPrice, discount, inspection_price, smoking, animals, children, agent, partying,
        check_in, check_out, agentComment, extraRules, airCondition, garage, wellWater, borehole, generator,
        powerSupply, kitchen, washingMachine, cleaner, bathtube, wardrobe, flatscreenTV, swimmingPool, ownerType
    } = formData;
    
    let compoundData = { 
        comp_name, comp_type, noOfRoomsPerBath, noOfRoomsPerToilet, areaLocated, powerSupply,
        generator, garage, washingMachine, swimmingPool, borehole, wellWater, smoking, animals, children, partying,
        check_in, check_out, extraRules, ownerType, agentComment, latitude, longitude, agent
    }
    
    let roomData = {
        roomType, noOfTenantPermitted, noOfWindows, roomArea: parseFloat(roomArea), roomAreaUnit, airCondition, kitchen, flatscreenTV,
        room_yearlyPrice, discount, inspection_price, wardrobe, cleaner, bathtube, compoundId, agent
    };

    return dispatch => {

        //compound
        if (compoundId === 0.1) {
            console.log(compoundData)
            axiosInstance.post(`/spaces/compound/`, compoundData)
            .then(res=>{
                if (res.status === 201) {
                    dispatch(compoundCreated)
                } else if (res.status === 400) {
                    dispatch(compoundFailed(res.data))
                }
            })
            .catch(err=>{
                console.log(err)
            })
        };
        
        //room
        axiosInstance.post('/spaces/room/', roomData)
        .then(res=>{
            if (res.status === 201) {
                dispatch(roomCreated())
            } else if (res.status === 400) {
                dispatch(roomFailed(res.data))
                console.log(res.data)
            };
        })
        .catch(err=>{
            console.log(err)
        })
        //compound image
        const config = {header: {'Content-Type': 'multipart/form-data'}};

        if (compoundId === 0.1) {
            // we need this if and only if we're creating a new compound!

            let compImgs = new FormData();
            _.forEach(comp_image, file=>{
                compImgs.append('comp_image', file)
            });
            compImgs.append('compoundId', compoundId)
            compImgs.append('agent', agent)
            axiosInstance.post(`/spaces/compound/images/`, compImgs, config)
            .then(res=>{
                if (res.status === 200) {
                    console.log(res.data)
                } else {
                    console.log('compound images error message', res.data)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
        //room image
        let roomImgs = new FormData();
        _.forEach(room_image, file=>{
            roomImgs.append('room_image', file)
        });
        roomImgs.append('agent', agent)
        roomImgs.append('compoundId', compoundId)
        axiosInstance.post(`/spaces/room/images/`, roomImgs, config)
        .then(res=>{
            if (res.status === 200) {
                console.log(res.data)
            } else {
                 console.log(res.data)
            }
        });
    };
};