import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow";

const Container = styled.div`
    flex: 0.8;
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
    height: 100vh;
    color: white;
    padding: 30px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

const InfoText = styled.div`

  flex: 1;
`;

const CoverArt = styled.img`
  height: 20vw;
  margin: 0 20px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

const PlaylistHeading = styled.strong``;

const HeadingH2 = styled.h2`

  font-size: 48px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 14px;
`;

const Songs = styled.div`
  margin: 20px -30px;
  z-index: 1;

`;

const Icons = styled.div`

  display: flex;
  align-items: center;

`;

const PlayIcon = styled(PlayCircleFilledIcon)`
  &.playBtn{
    margin-right: 20px;
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      transition: 100ms transform ease-in;
      transform: scale(1.08);
    }

  }
`;

const FavIcon = styled(FavoriteIcon)`

    &.favIcon {
      margin-right: 20px;
    }
`;

const MoreIcon = styled(MoreHorizIcon)`

    &.moreIcon {
      margin-right: 20px;
    }
`



const Body = ({spotify}) => {

  const [{ top_hits }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify.play({
      context_uri: `spotify:playlist:37i9dQZF1DXcBWIGoYBM5M`,
    })
      .then(res => {
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
      });
  };

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  }

  return (
    <Container>
      <Header spotify={spotify} />
      
      <Info>
        <CoverArt src={top_hits?.images[0].url} alt="" />
        
        <InfoText>
          <PlaylistHeading>PLAYLIST</PlaylistHeading>
          <HeadingH2>Today's Top Hits</HeadingH2>
          <Desc>{ top_hits?.description }</Desc>
        </InfoText>
      </Info>

      <Songs>
        <Icons>
          <PlayIcon className={"playBtn"} onClick={ playPlaylist }/>
          <FavIcon className={"favIcon"} fontSize="large"/>
          <MoreIcon className={"moreIcon"} />
        </Icons>
        {/* list of songs */}
        {top_hits?.tracks.items.map( item => (
          <SongRow track={ item.track } playSong={ playSong }/>
        ))}
      </Songs>
    </Container>
  )
}

export default Body;