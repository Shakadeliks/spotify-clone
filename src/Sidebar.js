import React from 'react'
import styled from "styled-components";
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from "./DataLayer"

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Container = styled.div`
    height: 100vh;
    flex: 0.2;
    background-color: #040404;
    color: white;
    height: 100vh;
    min-width: 230px;
    padding-left: 10px;
    padding-right: 10px;
    
`;

const Logo = styled.img`
    height: 70px;
    padding: 10px;
    margin-right: auto;
`

const SideTitle = styled.strong`

   margin-left: 10px;
   padding: 5px;
   font-style: 12px;
`

const SideLine = styled.hr`
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
`

const Sidebar = () => {

    const [{ playlists }] = useDataLayerValue();

  return (
    <Container>
        <Logo src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <SideTitle>PLAYLISTS</SideTitle>
        <SideLine />
        
        {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name} />      
        ))}
        
        
        
        
    </Container>
  )
}

export default Sidebar;