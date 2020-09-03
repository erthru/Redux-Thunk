import { GET_POSTS, GET_POST } from "../types";

const initState = {
    posts: [],
    post: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case GET_POST:
            return {
                ...state,
                post: action.payload
            }

        default: return state
    }
}