import './App.css';
import Login from "./Login";
import Player from './Player';
import { useEffect } from "react";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();



function App() {

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist("37i9dQZF1DXcBWIGoYBM5M").then(response => {

        console.log(response)
        dispatch({
          type: "SET_TOP_HITS",
          top_hits: response,
        })
      })

    }
  }, [dispatch])


  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />        
        )
      }
    </div>
  );
}

export default App;
