export const SET_LIKE = "::SET_LIKE::"
export const REMOVE_LIKE = "::REMOVE_LIKE::"
export const setLikeRedux = (ID) => {
    return {
        type: SET_LIKE,
        payload: {ID}
    }
}

export const removeLikeRedux = (ID) => {
    return {
        type: REMOVE_LIKE,
        payload: {ID}
    }
}