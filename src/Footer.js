import React, { useEffect } from 'react';
import styled from "styled-components";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import "./Footer.css";
import { useDataLayerValue } from './DataLayer';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 97%;
    background-color: #282828;
    padding: 20px;
`

const Left = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    color: white;
    width: 300px;
`;

const Center = styled.div`
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

`;

const Right = styled.div`
    flex: 0.3;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CoverArt = styled.img`
    object-fit: contain;
    margin-right: 20px;
    height: 60px;
    width: 60px;

`;

const SongInfo = styled.div``;

const SongName = styled.h4`

    margin-bottom: 5px;
`;

const SongArtist = styled.p`
    font-size: 12px;
`;

const VolSlider = styled(Slider)`

    &.slider{
        color: green;
    }
`


const Footer = ({ spotify }) => {

    const [{ token, item, playing, }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then(res => {
            console.log(res);

            dispatch({
                type: "SET_PLAYING",
                playing: res.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: res.item,
            });
        });
    }, [spotify, dispatch]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then(res => {
            dispatch({
                type: "SET_ITEM",
                item: res.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then(res => {
            dispatch({
                type: "SET_ITEM",
                item: res.item,
            })
            dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
        })
    }

  return (
    <Container>
        <Left>
            <CoverArt src={item?.album.images[0].url} alt={item?.name}/>
            
            {item ? (
                <SongInfo>
                    <SongName>
                        {item.name}
                    </SongName>
                    <SongArtist>
                        {item.artists.map(artist => artist.name).join(", ")}
                    </SongArtist>
                </SongInfo>
            ) : (
                <SongInfo>
                    <SongName>
                        No song is playing
                    </SongName>
                    <SongArtist>
                        ...
                    </SongArtist>
                </SongInfo>
            )}
              
        </Left>
        
        <Center>
            <ShuffleIcon 
                style={{
                cursor: "pointer"  
                }}
                className="footer__green"
            />
            <SkipPreviousIcon onClick={skipPrevious} className="footer__icon"/>

            {playing ? (
                <PauseCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer__icon"
                />
            ) : (
            <PlayCircleOutlineIcon 
                className="footer__icon"
                onClick={handlePlayPause}
                fontSize="large"
            />
            )}
            <SkipNextIcon className="footer__icon" onClick={skipNext}/>
            <RepeatIcon 
                style={{
                    cursor: "pointer"
                }}
                className="footer__green"
            />

        </Center>
        
        <Right>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <VolSlider className={"slider"}/>
                </Grid>
            </Grid>
        </Right>
    </Container>
  )
}

export default Footer;