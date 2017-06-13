import immutable from "immutable"

export default function reducer(state=immutable.Map({
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }), action) {

    switch (action.type) {
      case "FETCH_USER": {
        // return {...state, fetching: true}
        return state.set("fetching", true)
      }
      case "FETCH_USER_REJECTED": {
        // return {...state, fetching: false, error: action.payload}
        return state.mergeDeep({fetching: false, error: action.payload})
      }
      case "FETCH_USER_FULFILLED": {
        // return {
        //   ...state,
        //   fetching: false,
        //   fetched: true,
        //   user: action.payload,
        // }
        return state.mergeDeep({fetching: false, fetched: true, user: action.payload})
      }
      case "SET_USER_NAME": {
        // return {
        //   ...state,
        //   user: {...state.user, name: action.payload},
        // }
        return state.set("user.name", action.payload)
      }
      case "SET_USER_AGE": {
        // return {
        //   ...state,
        //   user: {...state.user, age: action.payload},
        // }
        return state.set("user.age", action.payload)
      }
    }

    return state
}
