import immutable from "immutable";

export default function reducer(state=immutable.Map({
    email: "",
    password: "",
    user: {},
    isLoginIn: false,
    token: ""
}), action) {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return state.set("email", action.email);
            // return {...state, email: action.email};
        case "UPDATE_PASSWORD":
            return state.set("password", action.password);
            // return {...state, password: action.password};
        case "LOGIN_STARTED":
            return state.set("isLoginIn", true);
            // return {...state, isLoginIn: true};
        case "LOGIN_DONE":
            return state.mergeDeep({user: action.user, isLoginIn: false});
            // return {...state, isLoginIn: false, user: action.user, token: action.token};
    }
    return state;
}