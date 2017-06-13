export function getChatDone(token) {
    return function (dispatch) {
        dispatch({type: "GET_CHATS_DONE", payload:{token: token}})
    }
}



