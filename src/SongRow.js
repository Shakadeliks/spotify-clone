import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: black;
        opacity: 0.8;
    }
`;

const SongImg = styled.img`
    height: 40px;
    width: 40px;
`;

const SongRowInfo = styled.div`
    margin-left: 20px;
`;

const TrackName = styled.h1`
    font-size: 16px;
    text-align: left;
`;

const TrackInfo = styled.p`
    font-size: 14px;
    margin-top: 3px;
    color: gray;
`;

const SongRow = ({ track, playSong }) => {

    console.log(track);

  return (
    <Container onClick={() => playSong(track.id)}>
        <SongImg src={track.album.images[0].url}/>
        <SongRowInfo>
            <TrackName>{track.name}</TrackName>
            <TrackInfo>
                {track.artists.map(artist => artist.name).join(", ")} - {track.album.name}
            </TrackInfo>
        </SongRowInfo>
    </Container>
  )
}

export default SongRow;