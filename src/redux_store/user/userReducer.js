export const INITIAL_STATE = {
    current: false,
    currentUser: {},
    userID: ''
}

export const ACTION_TYPE = {
    CURRENT: 'CURRENT',
    USER: 'USER',
    ID: 'ID'
}

export const userReducer = (state=INITIAL_STATE , action) => {
    const { type, payload } = action

    switch(type) {
        case ACTION_TYPE.CURRENT:
            return {
                ...state,
                current: payload
            }
        case ACTION_TYPE.USER:
            return {
                ...state,
                currentUser: payload
            }
        case ACTION_TYPE.ID:
            return {
                ...state,
                userID: payload
            }
        default:
            return state
    }
}