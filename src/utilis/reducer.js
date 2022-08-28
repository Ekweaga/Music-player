import { reducercases } from "./constants"

export const initialState = {
    token:null,
    playlists:[],
    userInfo:null,
    playlistId:null,
    playLists:null
}


export const reducer = (state,action) =>{
    switch(action.type){
        case reducercases.SET_TOKEN:{
            return {
                ...state,
                token:action.token
            }
        }
        case reducercases.SET_PLAYLISTS:{
            return{
                ...state,
                playlists:action.playlists
            }
           
        }
        case reducercases.SET_USER:{
            return{
                    ...state,
                    userInfo:action.user
            }
        }
        case reducercases.SET_SELECTEDPLAYLISTS:{
            return{
                ...state,
                playLists:action.playLists
        }
        }
        default:
            return state
    }
}

export default reducer