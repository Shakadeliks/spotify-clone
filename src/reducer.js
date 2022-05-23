export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
  
 
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            }
        case "SET_TOP_HITS":
            return {
                ...state,
                top_hits: action.top_hits,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }  
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }
        default:
            return state;
    }
}

export default reducer;