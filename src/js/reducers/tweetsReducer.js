import immutable from "immutable";


export default function reducer(state=immutable.Map({
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }), action) {

    switch (action.type) {
      case "FETCH_TWEETS": {
        return state.set("fetching", true)
        // return {...state, fetching: true}
      }
      case "FETCH_TWEETS_REJECTED": {
        // return {...state, fetching: false, error: action.payload}
        return state.mergeDeep({fetching: false, error: action.payload})
      }
      case "FETCH_TWEETS_FULFILLED": {
        // return {
        //   ...state,
        //   fetching: false,
        //   fetched: true,
        //   tweets: action.payload,
        // }
        return state.mergeDeep({fetching: false, fetched: true, tweets: action.payload})
      }
      case "ADD_TWEET": {
        return {
          ...state,
          tweets: [...state.tweets, action.payload],
        }
          // return state.set("tweets", action.payload)
      }
      case "UPDATE_TWEET": {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        // return {
        //   ...state,
        //   tweets: newTweets,
        // }
        return state.set("tweets", newTweets)
      }
      case "DELETE_TWEET": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
        // return state.set("")
      }
    }

    return state
}
