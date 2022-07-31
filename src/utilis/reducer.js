import { reducercases } from "./constants"

export const initialState = {
    token:null
}


export const reducer = (state,action) =>{
    switch(action.type){
        case reducercases.SET_TOKEN:{
            return {
                ...state,
                token:action.token
            }
        }
        default:
            return state
    }
}

export default reducer