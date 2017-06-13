import immutable from "immutable";

export default function reducer(state=immutable.Map({
//export default function reducer(state={

    chats: [],
    isChatLoaded: false,
}), action) {
    switch (action.type) {
        case "GET_CHATS":
            // return state.merge({chats: action.payload});
            // return state.set("chats", action.payload)
            // state.set("isChatLoaded", true)
            // return state;
            return state.merge({chats: action.payload, isChatLoaded: true});
            //return {...state, chat: action.payload, isChatLoaded: true};
        case "GET_CHATS_FAIL":
            return state.set("isChatLoaded", false)
            //return {...state, isChatLoaded: false};
    }
    return state;
}

