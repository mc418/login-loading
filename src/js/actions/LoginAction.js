import axios from "axios";

export function updateEmail(email) {
    return {type: "UPDATE_EMAIL", email};
}

export function updatePassword(password) {
    return {type: "UPDATE_PASSWORD", password};
}
//
// export function login(email, password) {
//     return function (dispatch) {
//         dispatch({type: "LOGIN_STARTED"});
//         axios.post("http://api.edu.chat/v1/api/login/", {
//             username: email,
//             password,
//             platform: "web"
//         }).then((response)=> {
//             const {user} = response.data.results;
//             dispatch({type: "LOGIN_DONE", user});
//        })
//    }
// }
//usually we don't use export function login like this, instead we use redux-saga. then no need to pull request each time

export function login(email, password) {
    return function (dispatch) {
        dispatch({type: "LOGIN_START", payload: {email: email, password: password}})
    }
}