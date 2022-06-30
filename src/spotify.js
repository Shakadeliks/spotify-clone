export const authEndPoint = "https://accounts.spotify.com/authorize"; 

const redirectUri = "https://628bd6b41f9656027476b34f--boisterous-tarsier-55f8fc.netlify.app/"//will redirect here once spotify api has authenticated user login
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]// scopes define the permissions for what the users are able to do on the app once logged in

//function to pull the access token included in the url that has been returned from the login authentication request to spotify api
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial
            
        }, {})

}

export const loginUrl = `${authEndPoint}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;






