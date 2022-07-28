import {REMOVE_LIKE, SET_LIKE, setLikeRedux} from "./actions";

const initialState = {
    likedMusic: []
}
export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIKE:
            return {
                ...state,
                likedMusic: [
                    ...state.likedMusic,
                    {ID : action.payload.ID}
                ]
            }

        case REMOVE_LIKE:
            return {
                ...state,
                likedMusic: state.likedMusic.filter(i => i.ID !== action.payload.ID)
            }
        default:
          return   state
    }

}