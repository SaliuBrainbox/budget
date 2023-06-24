 import { ACTION_TYPE } from './userReducer'


 export const createAction = (type, payload) => ({type, payload})

 export const setCurrentUser = (person) =>
   createAction(ACTION_TYPE.USER, person)

 export const setCurrent = (user) => 
    createAction(ACTION_TYPE.CURRENT, user)

 export const setUserID = (id) => 
    createAction(ACTION_TYPE.ID, id)