export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after development completed
    // token: "BQCW-f2-bxG0BjobCMPc7mEyQ_zjWEthieeupurNrcol3fA8A2gO9-XMzjxgoL9x4YjHiFn-t4MkTTHg2fAELx9qQBhpzR5H1iehbAPlriObfuahtw9rvs9dhmYZ4ftSvheSBScLyto3ii4dQIQ9P3wimxz4gcsVf8NX7KBlWb0pcMIF"
 
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