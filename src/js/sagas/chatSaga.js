import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import { getChats } from "../actions/getChat"

function sendRequest(token) {
    return axios.get("http://api.edu.chat/v1/chat/", {headers: {
        Authorization:
        "Token " + token,
    }
    });
}


function* getChatList(action) {
    if (action != undefined) {
        try {
            const response = yield call(sendRequest, action.payload.token);
            console.log(response);
            // yield put (getChats(response.data.results.chats));
            yield put({type: "GET_CHATS", payload: response.data.results.chats});
        } catch (error) {
            console.error("there's something wrong");
        }
    }
}



function* mySaga(){
    yield takeEvery("GET_CHATS_DONE", getChatList);
}

export default mySaga;
