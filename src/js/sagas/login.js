import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";

function sendRequest(email, password) {
    return axios.post("http://api.edu.chat/v1/api/login/",
        {
            username: email,
            password: password,
            platform: "web"});
}


function* checkLogin(action) {
    if (action != undefined) {
        try {
            const {data:{results}} = yield call(sendRequest, action.payload.email, action.payload.password);
            const {token, user} = results;
            yield put.resolve({type: "LOGIN_DONE", token, user})
            yield put({type:"GET_CHATS_DONE", payload:{token}});
        } catch (error) {
            console.error("login fail")
        }
    }
}


function* loginSaga(){
    yield takeEvery("LOGIN_START", checkLogin);
}

export default loginSaga;
