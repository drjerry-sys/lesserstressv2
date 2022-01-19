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
};

const groupData = (formData, value) => {
    let {
        gender, compoundId, roomType, areaLocated, noOfWindows, noOfTenantPermitted, noOfRoomsPerBath,
        noOfRoomsPerToilet, comp_name, comp_type, roomAreaUnit, roomArea, latitude, longitude, room_image,
        comp_image, room_yearlyPrice, discount, inspection_price, smoking, animals, children, partying,
        check_in, check_out, agentComment, extraRules, airCondition, garage, wellWater, borehole, generator,
        powerSupply, kitchen, washingMachine, cleaner, bathtube, wardrobe, flatscreenTV, swimmingPool, ownerType
    } = formData;

    let compoundData = { 
        comp_name, comp_type, noOfRoomsPerBath, noOfRoomsPerToilet, areaLocated, powerSupply,
        generator, garage, washingMachine, swimmingPool, borehole, wellWater, smoking, animals, children, partying,
        check_in, check_out, extraRules, ownerType, agentComment, latitude, longitude
    }

    let roomData = {
        roomType, noOfTenantPermitted, noOfWindows, roomArea, roomAreaUnit, airCondition, kitchen, flatscreenTV,
        room_yearlyPrice, discount, inspection_price, wardrobe, cleaner, bathtube, compoundId
    }

    if (value === "comp") {
        return { compoundData, compoundId }
    } else if (value === "room") {
        return roomData
    } else if (value === "roomimg") {
        return room_image
    } else if (value === "compimg") {
        return comp_image
    }
}


// spaces actions

const spaceCreated = () =>({
    type: types.SPACE_SUBMITTED
})

export const submitSpace = (formData) => {
    return dispatch => {

        console.log('formdata in actions', formData)

        const {compoundId, compoundData} = groupData(formData, 'comp');
        //compound
        if (compoundId !== 0.1) {
            axiosInstance.post('/spaces/compound/', compoundData)
            .then(res=>{
                if (res.status === 201) {
                    dispatch(spaceCreated)
                    console.log(res.data)
                } else {
                    console.log(res.data)
                }
            })
            .catch(err=>{
                console.log(err)
            })
        };
        //compound image
        const config = {header: {'Content-Type': 'multipart/form-data'}};

        let formtToPost = new FormData();
        formtToPost.append('comp_image', groupData(formData, 'compimg'))

        axiosInstance.post('/spaces/compound/images/', formtToPost, config)
        .then(res=>{
            if (res.status === 200) {
                console.log(res.data)
            } else {
                console.log(res.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })
        //compound image
        axiosInstance.post('')
        //room image
        let roomimgToPost = new FormData();
        roomimgToPost.append('room_image', groupData(roomimgToPost, 'roomimg'))
        
        axiosInstance.post('/spaces/room/images/', roomimgToPost, config)
        .then(res=>{
            if (res.status === 200) {
                console.log(res.data)
            } else {
                 console.log(res.data)
            }
        })
    }
}