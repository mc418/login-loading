export function getChats(chat) {
    return function (dispatch) {
        dispatch({type: "GET_CHATS", payload:{chat: chat}})
    }
}



